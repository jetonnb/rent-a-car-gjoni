import {
  alertCircleOutline,
  checkmarkCircleOutline,
  informationCircleOutline,
  warningOutline
} from "./chunk-3H5SGRIN.js";
import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import {
  Firestore,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where
} from "./chunk-SRZ7KN5Z.js";
import {
  AlertController,
  Injectable,
  Injector,
  LoadingController,
  Observable,
  ToastController,
  catchError,
  combineLatest,
  inject,
  map,
  of,
  runInInjectionContext,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-APU5R2IQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/services/data.service.ts
function calcTotalPrice(startIso, endIso, pricePerDay) {
  const diffMs = new Date(endIso).getTime() - new Date(startIso).getTime();
  const diffDays = Math.ceil(diffMs / (1e3 * 60 * 60 * 24));
  return Math.max(1, diffDays) * pricePerDay;
}
var DataService = class _DataService {
  firestore = inject(Firestore);
  injector = inject(Injector);
  CARS_PATH = "cars";
  RES_PATH = "reservations";
  _carsRaw$;
  _resRaw$;
  // ─── Private helpers ────────────────────────────────────────────────────────
  fromSnapshot(collRef) {
    return new Observable((subscriber) => {
      return runInInjectionContext(this.injector, () => {
        const unsubscribe = onSnapshot(query(collRef), (snapshot) => {
          const items = snapshot.docs.map((d) => __spreadValues({ id: d.id }, d.data()));
          subscriber.next(items);
        }, (error) => {
          console.error("DataService (onSnapshot ERROR):", error);
          subscriber.next([]);
        });
        return () => unsubscribe();
      });
    });
  }
  getCarsRaw$() {
    if (!this._carsRaw$) {
      this._carsRaw$ = this.fromSnapshot(collection(this.firestore, this.CARS_PATH)).pipe(shareReplay(1));
    }
    return this._carsRaw$;
  }
  getResRaw$() {
    if (!this._resRaw$) {
      this._resRaw$ = this.fromSnapshot(collection(this.firestore, this.RES_PATH)).pipe(map((docs) => docs.map((d) => this.mapReservation(d))), shareReplay(1));
    }
    return this._resRaw$;
  }
  mapReservation(data) {
    return __spreadProps(__spreadValues({}, data), {
      startDate: data.startDate instanceof Timestamp ? data.startDate.toDate().toISOString() : data.startDate,
      endDate: data.endDate instanceof Timestamp ? data.endDate.toDate().toISOString() : data.endDate
    });
  }
  toMillis(val) {
    if (val instanceof Timestamp)
      return val.toMillis();
    if (val instanceof Date)
      return val.getTime();
    if (typeof val === "string")
      return new Date(val).getTime();
    return 0;
  }
  checkIsReservedNow(carId, reservations) {
    if (!carId || !reservations?.length)
      return false;
    const now = Date.now();
    return reservations.some((r) => r.carId === carId && now <= this.toMillis(r.endDate));
  }
  // ─── Public API ─────────────────────────────────────────────────────────────
  /** Active cars only, with live reserved status */
  getCars$() {
    return combineLatest([this.getCarsRaw$(), this.getResRaw$()]).pipe(map(([cars, reservations]) => (cars ?? []).filter((c) => c.isActive !== false).map((c) => __spreadProps(__spreadValues({}, c), { isReserved: this.checkIsReservedNow(c.id, reservations) }))), catchError((err) => {
      console.error("DataService: ERROR in getCars$:", err);
      return of([]);
    }));
  }
  /** All cars (including inactive), with live reserved status */
  getAllCars$() {
    return combineLatest([this.getCarsRaw$(), this.getResRaw$()]).pipe(map(([cars, reservations]) => (cars ?? []).map((c) => __spreadProps(__spreadValues({}, c), { isReserved: this.checkIsReservedNow(c.id, reservations) }))), catchError((err) => {
      console.error("DataService: ERROR in getAllCars$:", err);
      return of([]);
    }));
  }
  /** Live single-car observable from the shared cache */
  getCarById$(id) {
    return this.getCarsRaw$().pipe(map((cars) => cars.find((c) => c.id === id)));
  }
  /** Live reservations for a specific car, sorted newest-first */
  getReservationsForCar$(carId) {
    const q = query(collection(this.firestore, this.RES_PATH), where("carId", "==", carId));
    return this.fromSnapshot(q).pipe(map((docs) => docs.map((d) => this.mapReservation(d)).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())));
  }
  /** Live single-reservation observable */
  getReservationById$(id) {
    return new Observable((subscriber) => {
      return runInInjectionContext(this.injector, () => {
        const resDoc = doc(this.firestore, `${this.RES_PATH}/${id}`);
        const unsubscribe = onSnapshot(resDoc, (snap) => subscriber.next(snap.exists() ? this.mapReservation(__spreadValues({ id: snap.id }, snap.data())) : void 0), (err) => subscriber.error(err));
        return () => unsubscribe();
      });
    });
  }
  // ─── Write operations ───────────────────────────────────────────────────────
  async addCar(model) {
    await addDoc(collection(this.firestore, this.CARS_PATH), {
      model: model.trim(),
      isActive: true
    });
  }
  async softDeleteCar(id) {
    await updateDoc(doc(this.firestore, `${this.CARS_PATH}/${id}`), { isActive: false });
  }
  async activateCar(id) {
    await updateDoc(doc(this.firestore, `${this.CARS_PATH}/${id}`), { isActive: true });
  }
  async deleteReservation(id) {
    await deleteDoc(doc(this.firestore, `${this.RES_PATH}/${id}`));
  }
  async checkAvailability(carId, startIso, endIso, excludeId) {
    const q = query(collection(this.firestore, this.RES_PATH), where("carId", "==", carId));
    const snap = await getDocs(q);
    const reservations = snap.docs.map((d) => __spreadValues({ id: d.id }, d.data()));
    const newStart = new Date(startIso).getTime();
    const newEnd = new Date(endIso).getTime();
    const conflict = reservations.some((r) => {
      if (excludeId && r.id === excludeId)
        return false;
      const exStart = r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime();
      const exEnd = r.endDate instanceof Timestamp ? r.endDate.toMillis() : new Date(r.endDate).getTime();
      return newStart < exEnd && newEnd > exStart;
    });
    return !conflict;
  }
  async addReservation(data) {
    const isAvail = await this.checkAvailability(data.carId, data.startDate, data.endDate);
    if (!isAvail) {
      throw new Error("Kjo makin\xEB \xEBsht\xEB e rezervuar n\xEB k\xEBto data. Ju lutem zgjidhni data t\xEB tjera.");
    }
    await addDoc(collection(this.firestore, this.RES_PATH), __spreadProps(__spreadValues({}, data), {
      startDate: Timestamp.fromDate(new Date(data.startDate)),
      endDate: Timestamp.fromDate(new Date(data.endDate)),
      totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
    }));
  }
  async updateReservation(id, data) {
    const isAvail = await this.checkAvailability(data.carId, data.startDate, data.endDate, id);
    if (!isAvail) {
      throw new Error("Kjo makin\xEB \xEBsht\xEB e rezervuar n\xEB k\xEBto data. Ju lutem zgjidhni data t\xEB tjera.");
    }
    await updateDoc(doc(this.firestore, `${this.RES_PATH}/${id}`), __spreadProps(__spreadValues({}, data), {
      startDate: Timestamp.fromDate(new Date(data.startDate)),
      endDate: Timestamp.fromDate(new Date(data.endDate)),
      totalPrice: calcTotalPrice(data.startDate, data.endDate, data.pricePerDay)
    }));
  }
  async getEarliestFreeDate(carId) {
    const now = /* @__PURE__ */ new Date();
    if (now.getMinutes() > 0 || now.getSeconds() > 0) {
      now.setHours(now.getHours() + 1);
    }
    now.setMinutes(0, 0, 0);
    const q = query(collection(this.firestore, this.RES_PATH), where("carId", "==", carId));
    const snap = await getDocs(q);
    const reservations = snap.docs.map((d) => d.data()).map((r) => ({
      start: r.startDate instanceof Timestamp ? r.startDate.toMillis() : new Date(r.startDate).getTime(),
      end: r.endDate instanceof Timestamp ? r.endDate.toMillis() : new Date(r.endDate).getTime()
    })).filter((r) => r.end > Date.now()).sort((a, b) => a.start - b.start);
    let proposed = now.getTime();
    let changed = true;
    while (changed) {
      changed = false;
      for (const r of reservations) {
        if (proposed >= r.start && proposed < r.end) {
          proposed = r.end;
          changed = true;
          break;
        }
      }
    }
    return new Date(proposed);
  }
  static calcTotalPrice(startIso, endIso, pricePerDay) {
    return calcTotalPrice(startIso, endIso, pricePerDay);
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/ui.service.ts
var UiService = class _UiService {
  toastCtrl = inject(ToastController);
  alertCtrl = inject(AlertController);
  loadingCtrl = inject(LoadingController);
  constructor() {
    addIcons({
      checkmarkCircleOutline,
      warningOutline,
      alertCircleOutline,
      informationCircleOutline
    });
  }
  /**
   * Shfaq një njoftim suksesi (Gjelbër)
   * @param message Mesazhi që do të shfaqet
   */
  async showSuccess(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3e3,
      position: "bottom",
      cssClass: "toast-success",
      icon: "checkmark-circle-outline",
      buttons: [
        {
          text: "OK",
          role: "cancel"
        }
      ]
    });
    await toast.present();
  }
  /**
   * Shfaq një njoftim gabimi (I Kuq)
   * @param message Mesazhi që do të shfaqet (Instruksional)
   */
  async showError(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5e3,
      position: "bottom",
      cssClass: "toast-error",
      icon: "warning-outline",
      buttons: [
        {
          text: "Kuptova",
          role: "cancel"
        }
      ]
    });
    await toast.present();
  }
  /**
   * Shfaq një paralajmërim (Portokalli/Amber)
   * @param message Mesazhi që do të shfaqet
   */
  async showWarning(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4e3,
      position: "bottom",
      cssClass: "toast-warning",
      icon: "alert-circle-outline",
      buttons: [
        {
          text: "OK",
          role: "cancel"
        }
      ]
    });
    await toast.present();
  }
  /**
   * Kërkon konfirmim për një veprim madhor
   * @param header Titulli i dialogut
   * @param message Mesazhi sqarues
   * @returns Promise<boolean> true nëse përdoruesi pranon
   */
  async confirm(header, message) {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header,
        message,
        cssClass: "custom-alert",
        buttons: [
          {
            text: "Anulo",
            role: "cancel",
            cssClass: "alert-button-cancel",
            handler: () => resolve(false)
          },
          {
            text: "Po, Jam i Sigurt",
            role: "confirm",
            cssClass: "alert-button-confirm",
            handler: () => resolve(true)
          }
        ]
      });
      await alert.present();
    });
  }
  /**
   * Shfaq një spinner ngarkimi me tekst
   * @param message Teksti instruksional
   */
  async showLoading(message = "Duke p\xEBrpunuar t\xEB dh\xEBnat...") {
    const loading = await this.loadingCtrl.create({
      message,
      spinner: "crescent",
      cssClass: "custom-loading"
    });
    await loading.present();
    return loading;
  }
  static \u0275fac = function UiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UiService, factory: _UiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DataService,
  UiService
};
//# sourceMappingURL=chunk-EFZJ2WTN.js.map
