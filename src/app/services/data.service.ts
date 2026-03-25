import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import {
  Firestore, collection, doc, addDoc, updateDoc, deleteDoc,
  query, where, Timestamp, getDocs, onSnapshot
} from '@angular/fire/firestore';
import { Observable, combineLatest, map, catchError, of, shareReplay } from 'rxjs';
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


  // ─── Private helpers ────────────────────────────────────────────────────────

  private fromSnapshot<T>(collRef: any): Observable<T[]> {
    return new Observable<T[]>(subscriber => {
      return runInInjectionContext(this.injector, () => {
        const unsubscribe = onSnapshot(
          query(collRef),
          snapshot => {
            const items = snapshot.docs.map(d => ({ id: d.id, ...(d.data() as object) } as T));
            subscriber.next(items);
          },
          error => {
            console.error('DataService (onSnapshot ERROR):', error);
            subscriber.next([]);
          }
        );
        return () => unsubscribe();
      });
    });
  }

  private getCarsRaw$(): Observable<Car[]> {
    return this.fromSnapshot<Car>(collection(this.firestore, this.CARS_PATH)).pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private getResRaw$(): Observable<Reservation[]> {
    return this.fromSnapshot<any>(collection(this.firestore, this.RES_PATH)).pipe(
      map(docs => docs.map(d => this.mapReservation(d))),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private mapReservation(data: any): Reservation {
    return {
      ...data,
      startDate: data.startDate instanceof Timestamp ? data.startDate.toDate().toISOString() : data.startDate,
      endDate:   data.endDate   instanceof Timestamp ? data.endDate.toDate().toISOString()   : data.endDate,
    };
  }

  private toMillis(val: any): number {
    if (val instanceof Timestamp) return val.toMillis();
    if (val instanceof Date)      return val.getTime();
    if (typeof val === 'string')  return new Date(val).getTime();
    return 0;
  }

  private checkIsReservedNow(carId: string, reservations: Reservation[]): boolean {
    if (!carId || !reservations?.length) return false;
    const now = Date.now();
    return reservations.some(r => r.carId === carId && now <= this.toMillis(r.endDate));
  }

  // ─── Public API ─────────────────────────────────────────────────────────────

  /** Active cars only, with live reserved status */
  getCars$(): Observable<Car[]> {
    return combineLatest([this.getCarsRaw$(), this.getResRaw$()]).pipe(
      map(([cars, reservations]) =>
        (cars ?? [])
          .filter(c => c.isActive !== false)
          .map(c => ({ ...c, isReserved: this.checkIsReservedNow(c.id, reservations) }))
      ),
      catchError(err => {
        console.error('DataService: ERROR in getCars$:', err);
        return of([]);
      })
    );
  }

  /** All cars (including inactive), with live reserved status */
  getAllCars$(): Observable<Car[]> {
    return combineLatest([this.getCarsRaw$(), this.getResRaw$()]).pipe(
      map(([cars, reservations]) =>
        (cars ?? []).map(c => ({ ...c, isReserved: this.checkIsReservedNow(c.id, reservations) }))
      ),
      catchError(err => {
        console.error('DataService: ERROR in getAllCars$:', err);
        return of([]);
      })
    );
  }

  /** Live single-car observable from the shared cache */
  getCarById$(id: string): Observable<Car | undefined> {
    return this.getCarsRaw$().pipe(
      map(cars => cars.find(c => c.id === id))
    );
  }

  /** Live reservations for a specific car, sorted newest-first */
  getReservationsForCar$(carId: string): Observable<Reservation[]> {
    const q = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
    return this.fromSnapshot<any>(q).pipe(
      map(docs =>
        docs
          .map(d => this.mapReservation(d))
          .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
      )
    );
  }

  /** Live single-reservation observable */
  getReservationById$(id: string): Observable<Reservation | undefined> {
    return new Observable<Reservation | undefined>(subscriber => {
      return runInInjectionContext(this.injector, () => {
        const resDoc = doc(this.firestore, `${this.RES_PATH}/${id}`);
        const unsubscribe = onSnapshot(
          resDoc,
          snap => subscriber.next(snap.exists() ? this.mapReservation({ id: snap.id, ...snap.data() }) : undefined),
          err  => subscriber.error(err)
        );
        return () => unsubscribe();
      });
    });
  }

  // ─── Write operations ───────────────────────────────────────────────────────

  async addCar(model: string): Promise<void> {
    await addDoc(collection(this.firestore, this.CARS_PATH), {
      model: model.trim(),
      isActive: true
    });
  }

  async softDeleteCar(id: string): Promise<void> {
    await updateDoc(doc(this.firestore, `${this.CARS_PATH}/${id}`), { isActive: false });
  }

  async activateCar(id: string): Promise<void> {
    await updateDoc(doc(this.firestore, `${this.CARS_PATH}/${id}`), { isActive: true });
  }

  async deleteReservation(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, `${this.RES_PATH}/${id}`));
  }

  async checkAvailability(
    carId: string,
    startIso: string,
    endIso: string,
    excludeId?: string
  ): Promise<boolean> {
    const q    = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
    const snap = await getDocs(q);
    const reservations = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));

    const newStart = new Date(startIso).getTime();
    const newEnd   = new Date(endIso).getTime();

    const conflict = reservations.some(r => {
      if (excludeId && r.id === excludeId) return false;
      const exStart = r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime();
      const exEnd   = r.endDate   instanceof Timestamp ? r.endDate.toMillis()   : new Date(r.endDate).getTime();
      return newStart < exEnd && newEnd > exStart;
    });

    return !conflict;
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
    await addDoc(collection(this.firestore, this.RES_PATH), {
      ...data,
      startDate:  Timestamp.fromDate(new Date(data.startDate)),
      endDate:    Timestamp.fromDate(new Date(data.endDate)),
      totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
    });
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
    await updateDoc(doc(this.firestore, `${this.RES_PATH}/${id}`), {
      ...data,
      startDate:  Timestamp.fromDate(new Date(data.startDate)),
      endDate:    Timestamp.fromDate(new Date(data.endDate)),
      totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
    });
  }

  async getEarliestFreeDate(carId: string): Promise<Date> {
    const now = new Date();
    if (now.getMinutes() > 0 || now.getSeconds() > 0) {
      now.setHours(now.getHours() + 1);
    }
    now.setMinutes(0, 0, 0);

    const q    = query(collection(this.firestore, this.RES_PATH), where('carId', '==', carId));
    const snap = await getDocs(q);
    const reservations = snap.docs
      .map(d => d.data() as any)
      .map(r => ({
        start: r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime(),
        end:   r.endDate   instanceof Timestamp ? r.endDate.toMillis()   : new Date(r.endDate).getTime(),
      }))
      .filter(r => r.end > Date.now())
      .sort((a, b) => a.start - b.start);

    let proposed = now.getTime();
    let changed  = true;

    while (changed) {
      changed = false;
      for (const r of reservations) {
        if (proposed >= r.start && proposed < r.end) {
          proposed = r.end;
          changed  = true;
          break;
        }
      }
    }

    return new Date(proposed);
  }

  static calcTotalPrice(startIso: string, endIso: string, pricePerDay: number): number {
    return calcTotalPrice(startIso, endIso, pricePerDay);
  }
}
