import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { 
  Firestore, collection, doc, addDoc, updateDoc, deleteDoc, getDoc,
  query, where, Timestamp, getDocs, onSnapshot 
} from '@angular/fire/firestore';
import { Observable, combineLatest, map, interval, startWith, catchError, of, shareReplay } from 'rxjs';
import { Car } from '../models/car.model';
import { Reservation } from '../models/reservation.model';

function calcTotalPrice(startIso: string, endIso: string, pricePerDay: number): number {
  const diffMs = new Date(endIso).getTime() - new Date(startIso).getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays) * pricePerDay;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private firestore = inject(Firestore);
  private injector  = inject(Injector);
  
  private CARS_PATH = 'cars';
  private RES_PATH  = 'reservations';

  private _carsRaw$?: Observable<Car[]>;
  private _resRaw$?: Observable<any[]>;

  constructor() {}

  private getCarsRaw$(): Observable<Car[]> {
    if (!this._carsRaw$) {
      this._carsRaw$ = this.fromCollection<Car>(this.CARS_PATH).pipe(shareReplay(1));
    }
    return this._carsRaw$;
  }

  private getResRaw$(): Observable<any[]> {
    if (!this._resRaw$) {
      this._resRaw$ = this.fromCollection<any>(this.RES_PATH).pipe(shareReplay(1));
    }
    return this._resRaw$;
  }

  private checkIsReservedNow(carId: string, reservations: any[]): boolean {
    if (!carId || !reservations) return false;
    const now = Date.now();
    return reservations.some(r => {
      if (r.carId !== carId) return false;
      
      const start = this.toMillis(r.startDate);
      const end   = this.toMillis(r.endDate);
      
      // The user wants it to be marked as "Reserved" even if it's in the future,
      // as long as it isn't finished yet.
      return now <= end;
    });
  }

  private toMillis(val: any): number {
    if (val instanceof Timestamp) return val.toMillis();
    if (val instanceof Date) return val.getTime();
    if (typeof val === 'string') return new Date(val).getTime();
    return 0;
  }

  private mapReservation(data: any): Reservation {
    return {
      ...data,
      startDate: data.startDate instanceof Timestamp ? data.startDate.toDate().toISOString() : data.startDate,
      endDate:   data.endDate instanceof Timestamp   ? data.endDate.toDate().toISOString()   : data.endDate,
    };
  }

  private fromCollection<T>(collRefOrPath: any, constraints: any[] = []): Observable<T[]> {
    return new Observable<T[]>(subscriber => {
      return runInInjectionContext(this.injector, () => {
        const collRef = typeof collRefOrPath === 'string' ? collection(this.firestore, collRefOrPath) : collRefOrPath;
        const q = constraints.length > 0 ? query(collRef, ...constraints) : query(collRef);
        const unsubscribe = onSnapshot(q, 
          (snapshot) => {
            const items = snapshot.docs.map(doc => ({
              id: doc.id,
              ...(doc.data() as object)
            } as T));
            subscriber.next(items);
          },
          (error) => {
            console.error(`DataService (onSnapshot ERROR):`, error);
            subscriber.next([]);
          }
        );
        return () => unsubscribe();
      });
    });
  }

  getCars$(): Observable<Car[]> {
    return combineLatest([
      this.getCarsRaw$(),
      this.getResRaw$(),
      interval(10000).pipe(startWith(0))
    ]).pipe(
      map(([cars, reservations]) => (cars || [])
        .filter(c => c.isActive !== false)
        .map(c => ({
          ...c,
          isReserved: this.checkIsReservedNow(c ? c.id : '', reservations || [])
        }))
      ),
      catchError(err => {
        console.error('DataService: ERROR in getCars$:', err);
        return of([]);
      })
    );
  }

  getAllCars$(): Observable<Car[]> {
    return combineLatest([
      this.getCarsRaw$(),
      this.getResRaw$(),
      interval(10000).pipe(startWith(0))
    ]).pipe(
      map(([cars, reservations]) => (cars || []).map(c => ({
        ...c,
        isReserved: this.checkIsReservedNow(c ? c.id : '', reservations || [])
      }))),
      catchError(err => {
        console.error('Firestore Read ERROR in getAllCars$:', err);
        return of([]);
      })
    );
  }

  getCarById(id: string): Car | undefined {
    return undefined;
  }

  getCarById$(id: string): Observable<Car | undefined> {
    return this.getCarsRaw$().pipe(
      map(cars => cars.find(c => c.id === id))
    );
  }

  async addCar(model: string): Promise<void> {
    await this.runInContext(() => 
      addDoc(collection(this.firestore, this.CARS_PATH), {
        model: model.trim(),
        isActive: true
      })
    );
  }

  async softDeleteCar(id: string): Promise<void> {
    return this.runInContext(() => {
      const carDoc = doc(this.firestore, `${this.CARS_PATH}/${id}`);
      return updateDoc(carDoc, { isActive: false });
    });
  }

  async activateCar(id: string): Promise<void> {
    return this.runInContext(() => {
      const carDoc = doc(this.firestore, `${this.CARS_PATH}/${id}`);
      return updateDoc(carDoc, { isActive: true });
    });
  }
  getReservationsForCar$(carId: string): Observable<Reservation[]> {
    return new Observable<Reservation[]>(subscriber => {
      return runInInjectionContext(this.injector, () => {
        const q = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
        const sub = this.fromCollection<any>(q).pipe(
          map(res => res.map(r => this.mapReservation(r))
                        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
          )
        ).subscribe(subscriber);
        return () => sub.unsubscribe();
      });
    });
  }

  getReservationById$(id: string): Observable<Reservation | undefined> {
    return new Observable<Reservation | undefined>(subscriber => {
      return runInInjectionContext(this.injector, () => {
        const resDoc = doc(this.firestore, `${this.RES_PATH}/${id}`);
        const unsubscribe = onSnapshot(resDoc, (snap) => {
          if (!snap.exists()) {
            subscriber.next(undefined);
            return;
          }
          subscriber.next(this.mapReservation({ id: snap.id, ...snap.data() }));
        }, err => subscriber.error(err));
        return () => unsubscribe();
      });
    });
  }

  private runInContext<T>(fn: () => T): T {
    return runInInjectionContext(this.injector, fn);
  }

  async deleteReservation(id: string): Promise<void> {
    return this.runInContext(() => deleteDoc(doc(this.firestore, `${this.RES_PATH}/${id}`)));
  }

  async updateReservation(id: string, data: {
    carId: string;
    clientName: string;
    startDate: string;
    endDate: string;
    pricePerDay: number;
  }): Promise<void> {
    const isAvail = await this.checkAvailability(data.carId, data.startDate, data.endDate, id);
    if (!isAvail) {
      throw new Error('Kjo makinë është e rezervuar në këto data. Ju lutem zgjidhni data të tjera.');
    }

    return this.runInContext(() => {
      const resDoc = doc(this.firestore, `${this.RES_PATH}/${id}`);
      const resData = {
        ...data,
        startDate: Timestamp.fromDate(new Date(data.startDate)),
        endDate:   Timestamp.fromDate(new Date(data.endDate)),
        totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
      };
      return updateDoc(resDoc, resData);
    });
  }

  async checkAvailability(
    carId: string,
    startIso: string,
    endIso: string,
    excludeId?: string
  ): Promise<boolean> {
    return this.runInContext(async () => {
      const q = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
      const snap = await getDocs(q);
      const reservations = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));

      const newStart = new Date(startIso).getTime();
      const newEnd   = new Date(endIso).getTime();

      const conflict = reservations.some(r => {
        if (excludeId && r.id === excludeId) return false;
        const exStart = r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime();
        const exEnd   = r.endDate instanceof Timestamp   ? r.endDate.toMillis()   : new Date(r.endDate).getTime();
        return newStart < exEnd && newEnd > exStart;
      });

      return !conflict;
    });
  }

  async addReservation(data: {
    carId: string;
    clientName: string;
    startDate: string;
    endDate: string;
    pricePerDay: number;
  }): Promise<void> {
    const isAvail = await this.checkAvailability(data.carId, data.startDate, data.endDate);
    if (!isAvail) {
      throw new Error('Kjo makinë është e rezervuar në këto data. Ju lutem zgjidhni data të tjera.');
    }

    return this.runInContext(async () => {
      const resData = {
        ...data,
        startDate: Timestamp.fromDate(new Date(data.startDate)),
        endDate:   Timestamp.fromDate(new Date(data.endDate)),
        totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
      };
      await addDoc(collection(this.firestore, this.RES_PATH), resData);
    });
  }

  async getEarliestFreeDate(carId: string): Promise<Date> {
    const now = new Date();
    if (now.getMinutes() > 0 || now.getSeconds() > 0) {
      now.setHours(now.getHours() + 1);
    }
    now.setMinutes(0, 0, 0);

    return this.runInContext(async () => {
      const q = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
      const snap = await getDocs(q);
      const reservations = snap.docs
        .map(d => d.data() as any)
        .map(r => ({
          start: r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime(),
          end:   r.endDate   instanceof Timestamp ? r.endDate.toMillis()   : new Date(r.endDate).getTime(),
        }))
        .filter(r => r.end > Date.now()) // only future/active ones matter
        .sort((a, b) => a.start - b.start);

      let proposed = now.getTime();
      let changed = true;

      // Keep looping until no reservation overlaps with `proposed`
      while (changed) {
        changed = false;
        for (const r of reservations) {
          if (proposed >= r.start && proposed < r.end) {
            proposed = r.end; // jump to end of this reservation
            changed = true;
            break;
          }
        }
      }

      return new Date(proposed);
    });
  }

  static calcTotalPrice(startIso: string, endIso: string, pricePerDay: number): number {
    return calcTotalPrice(startIso, endIso, pricePerDay);
  }
}
