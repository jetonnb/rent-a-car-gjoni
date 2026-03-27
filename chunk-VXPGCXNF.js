import {
  DataService,
  UiService
} from "./chunk-MYUUSVON.js";
import {
  calendarOutline,
  carOutline,
  saveOutline,
  warningOutline
} from "./chunk-3H5SGRIN.js";
import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import "./chunk-H22GPG2J.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  Component,
  CurrencyPipe,
  FormsModule,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSpinner,
  IonTitle,
  IonToolbar,
  NgControlStatus,
  NgModel,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MT4FHGR7.js";
import "./chunk-7JXEFQIK.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-TIHBQCND.js";
import "./chunk-LX5EONZL.js";
import "./chunk-6C5M3URP.js";
import "./chunk-I4AZ4AU3.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-DNIB7I2N.js";
import "./chunk-2I3SQVPY.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-PAXKX5KU.js";

// src/app/pages/reservation/reservation.page.ts
function ReservationPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ion-icon", 26);
    \u0275\u0275elementStart(2, "div")(3, "p", 27);
    \u0275\u0275text(4, "Makina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.car.model);
  }
}
function ReservationPage_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-datetime", 29);
    \u0275\u0275listener("ionChange", function ReservationPage_ng_template_22_Template_ion_datetime_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartDateChange($event));
    });
    \u0275\u0275elementStart(2, "ion-buttons", 30)(3, "ion-button", 31);
    \u0275\u0275listener("click", function ReservationPage_ng_template_22_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const startModal_r4 = \u0275\u0275reference(21);
      return \u0275\u0275resetView(ctx_r1.confirmStart(startModal_r4));
    });
    \u0275\u0275text(4, "OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6, "Ora");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hourCycle", "h23")("value", ctx_r1.startDate);
  }
}
function ReservationPage_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-datetime", 29);
    \u0275\u0275listener("ionChange", function ReservationPage_ng_template_32_Template_ion_datetime_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEndDateChange($event));
    });
    \u0275\u0275elementStart(2, "ion-buttons", 30)(3, "ion-button", 31);
    \u0275\u0275listener("click", function ReservationPage_ng_template_32_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      const endModal_r6 = \u0275\u0275reference(31);
      return \u0275\u0275resetView(ctx_r1.confirmEnd(endModal_r6));
    });
    \u0275\u0275text(4, "OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6, "Ora");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hourCycle", "h23")("value", ctx_r1.endDate);
  }
}
function ReservationPage_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "ion-icon", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.validationMsg);
  }
}
function ReservationPage_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.diffDays, " dit\xEB x ", ctx_r1.pricePerDay, "\u20AC ");
  }
}
function ReservationPage_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(1, 1, ctx_r1.totalPrice, "EUR", "symbol", "1.0-0"), " ");
  }
}
function ReservationPage_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function ReservationPage_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 25);
  }
}
function ReservationPage_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.resId ? "P\xEBrdit\xEBso Rezervimin" : "Ruaj Rezervimin", " ");
  }
}
var ReservationPage = class _ReservationPage {
  route;
  router;
  data;
  cdr;
  ui;
  car;
  carId = "";
  resId = "";
  // Fushat e formës
  clientName = "";
  startDate = "";
  endDate = "";
  pricePerDay = null;
  // Llogaritje dhe validim
  totalPrice = 0;
  diffDays = 0;
  isAvailable = true;
  validationMsg = "";
  saving = false;
  checkingAvailability = false;
  initializing = true;
  _subs = [];
  // Metodat për mbylljen e modaleve pas konfirmimit
  confirmStart(modalDetail) {
    modalDetail.dismiss();
  }
  confirmEnd(modalDetail) {
    modalDetail.dismiss();
  }
  constructor(route, router, data, cdr, ui) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.cdr = cdr;
    this.ui = ui;
    addIcons({ saveOutline, calendarOutline, warningOutline, carOutline });
  }
  async ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get("id") ?? "";
    this.resId = this.route.snapshot.paramMap.get("resId") ?? "";
    this._subs.push(this.data.getCarById$(this.carId).subscribe((c) => this.car = c));
    if (this.resId) {
      this._subs.push(this.data.getReservationById$(this.resId).subscribe(async (res) => {
        if (res) {
          this.clientName = res.clientName;
          this.startDate = res.startDate.substring(0, 16);
          this.endDate = res.endDate.substring(0, 16);
          this.pricePerDay = res.pricePerDay;
          await this.recalculate();
          this.cdr.detectChanges();
        }
      }));
    } else {
      const pad = (n) => n < 10 ? "0" + n : n;
      const toLocalISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
      try {
        const freeDate = await this.data.getEarliestFreeDate(this.carId);
        this.startDate = toLocalISO(freeDate);
        const dayAfter = new Date(freeDate);
        dayAfter.setDate(dayAfter.getDate() + 1);
        this.endDate = toLocalISO(dayAfter);
        await this.recalculate();
        this.initializing = false;
        this.cdr.detectChanges();
      } catch (e) {
        console.error("Gabim gjat\xEB inicializimit:", e);
      }
    }
  }
  ngOnDestroy() {
    this._subs.forEach((s) => s.unsubscribe());
  }
  /** Rillogaritje automatike sa herë ndryshon çdo fushë */
  async recalculate() {
    this.validationMsg = "";
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).getTime();
      const end = new Date(this.endDate).getTime();
      if (end <= start) {
        this.totalPrice = 0;
        this.diffDays = 0;
        this.isAvailable = false;
        this.validationMsg = "Data e kthimit duhet t\xEB jet\xEB pas dat\xEBs s\xEB marrjes.";
        return;
      }
      if (end - start < 1e3 * 60 * 60) {
        this.totalPrice = 0;
        this.diffDays = 0;
        this.isAvailable = false;
        this.validationMsg = "Rezervimi duhet t\xEB jet\xEB t\xEB pakt\xEBn 1 or\xEB.";
        return;
      }
      const diffMs = end - start;
      const dDays = Math.ceil(diffMs / (1e3 * 60 * 60 * 24));
      this.diffDays = Math.max(1, dDays);
      this.totalPrice = DataService.calcTotalPrice(this.startDate, this.endDate, this.pricePerDay || 0);
      this.checkingAvailability = true;
      try {
        const avail = await this.data.checkAvailability(this.carId, this.startDate, this.endDate, this.resId);
        this.isAvailable = avail;
        if (!this.isAvailable && !this.initializing) {
          this.validationMsg = "Disa nga k\xEBto data jan\xEB t\xEB z\xEBna nga nj\xEB rezervim tjet\xEBr. Ju lutem shikoni historin dhe provoni nj\xEB periudh\xEB tjet\xEBr.";
        }
      } catch (e) {
        this.isAvailable = false;
        this.validationMsg = "Ndodhi nj\xEB gabim gjat\xEB kontrollit t\xEB disponueshm\xEBris\xEB.";
      } finally {
        this.checkingAvailability = false;
        this.cdr.detectChanges();
      }
    }
  }
  onStartDateChange(event) {
    const raw = event?.detail?.value;
    if (raw) {
      const newValue = typeof raw === "string" ? raw.substring(0, 16) : raw;
      if (newValue !== this.startDate) {
        this.startDate = newValue;
        this.recalculate();
      }
    }
  }
  onEndDateChange(event) {
    const raw = event?.detail?.value;
    if (raw) {
      const newValue = typeof raw === "string" ? raw.substring(0, 16) : raw;
      if (newValue !== this.endDate) {
        this.endDate = newValue;
        this.recalculate();
      }
    }
  }
  get canSave() {
    return this.clientName.trim().length > 0 && !!this.startDate && !!this.endDate && this.totalPrice > 0 && this.isAvailable && !this.saving && !this.checkingAvailability;
  }
  async save() {
    if (!this.clientName.trim()) {
      this.ui.showError("Ju lutem shkruani emrin e klientit p\xEBr t\xEB vazhduar.");
      return;
    }
    if (!this.pricePerDay || this.pricePerDay <= 0) {
      this.ui.showError("Ju lutem shkruani \xE7mimin p\xEBr dit\xEB (p.sh. 30).");
      return;
    }
    if (!this.isAvailable) {
      this.ui.showError(this.validationMsg || "Kjo makin\xEB nuk \xEBsht\xEB e lir\xEB p\xEBr datat e zgjedhura.");
      return;
    }
    const loader = await this.ui.showLoading(this.resId ? "Duke p\xEBrdit\xEBsuar rezervimin..." : "Duke ruajtur rezervimin...");
    this.saving = true;
    try {
      const payload = {
        carId: this.carId,
        clientName: this.clientName.trim(),
        startDate: this.startDate,
        endDate: this.endDate,
        pricePerDay: this.pricePerDay || 0
      };
      if (this.resId) {
        await this.data.updateReservation(this.resId, payload);
      } else {
        await this.data.addReservation(payload);
      }
      await this.ui.showSuccess("Rezervimi u ruajt me sukses!");
      this.router.navigate(["/cars", this.carId, "history"], { replaceUrl: true });
    } catch (e) {
      this.ui.showError(e.message || "Ndodhi nj\xEB gabim gjat\xEB ruajtjes. Ju lutem kontrolloni t\xEB dh\xEBnat.");
      this.isAvailable = false;
    } finally {
      this.saving = false;
      loader.dismiss();
    }
  }
  /** Formatim user-friendly i datës në Shqip */
  formatDate(iso) {
    if (!iso)
      return "\u2014";
    const d = new Date(iso);
    const months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"];
    const days = ["E Diel", "E H\xEBn\xEB", "E Mart\xEB", "E M\xEBrkur\xEB", "E Enjte", "E Premte", "E Shtun\xEB"];
    const pad = (n) => n < 10 ? "0" + n : n.toString();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    return `${dayName}, ${d.getDate()} ${monthName} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  static \u0275fac = function ReservationPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationPage, selectors: [["app-reservation"]], decls: 50, vars: 14, consts: [["startModal", ""], ["endModal", ""], ["slot", "start"], ["defaultHref", "/cars", "text", "Prapa"], [1, "res-content"], [1, "car-banner"], [1, "form-section"], ["lines", "none", 1, "form-item"], ["position", "stacked", 2, "font-weight", "800", "font-size", "18px !important", "color", "var(--ion-color-primary)"], ["placeholder", "Shkruaj emrin...", "autocapitalize", "words", 3, "ngModelChange", "ngModel"], [1, "datetime-item"], [1, "field-label"], ["id", "open-start-date", 1, "datetime-trigger"], ["name", "calendar-outline"], ["trigger", "open-start-date"], ["id", "open-end-date", 1, "datetime-trigger"], ["trigger", "open-end-date"], [1, "validation-error-box"], ["type", "number", "inputmode", "decimal", "placeholder", "p.sh. 30", 3, "ngModelChange", "ionInput", "ngModel", "min"], [1, "total-box"], [1, "total-label"], [2, "margin", "4px 0 0", "font-size", "14px", "color", "rgba(255,255,255,0.75)"], [1, "total-value", 2, "font-size", "32px", "font-weight", "900"], [1, "save-section"], ["expand", "block", 1, "save-btn", 3, "click", "disabled"], ["name", "crescent"], ["name", "car-outline", 1, "banner-icon"], [1, "banner-label"], [1, "banner-model", 2, "font-size", "22px", "font-weight", "800"], ["presentation", "date-time", "locale", "sq-AL", "size", "cover", "max", "2030-12-31T23:59:59", 3, "ionChange", "hourCycle", "value"], ["slot", "buttons"], ["color", "primary", 3, "click"], ["slot", "time-label"], ["name", "warning-outline"], ["name", "save-outline", "slot", "start"]], template: function ReservationPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 4);
      \u0275\u0275conditionalCreate(7, ReservationPage_Conditional_7_Template, 7, 1, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "ion-item", 7)(10, "ion-label", 8);
      \u0275\u0275text(11, "Emri i Klientit *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ion-input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationPage_Template_ion_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.clientName, $event) || (ctx.clientName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "ion-label", 11);
      \u0275\u0275text(15, "Dita e marrjes dhe Ora *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275element(17, "ion-icon", 13);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "ion-modal", 14, 0);
      \u0275\u0275template(22, ReservationPage_ng_template_22_Template, 7, 2, "ng-template");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 10)(24, "ion-label", 11);
      \u0275\u0275text(25, "Dita e kthimit dhe Ora *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 15);
      \u0275\u0275element(27, "ion-icon", 13);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "ion-modal", 16, 1);
      \u0275\u0275template(32, ReservationPage_ng_template_32_Template, 7, 2, "ng-template");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, ReservationPage_Conditional_33_Template, 4, 1, "div", 17);
      \u0275\u0275elementStart(34, "ion-item", 7)(35, "ion-label", 8);
      \u0275\u0275text(36, "\xC7mimi n\xEB Dit\xEB (\u20AC) *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "ion-input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationPage_Template_ion_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pricePerDay, $event) || (ctx.pricePerDay = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ionInput", function ReservationPage_Template_ion_input_ionInput_37_listener() {
        return ctx.recalculate();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 19)(39, "div")(40, "p", 20);
      \u0275\u0275text(41, "\xC7mimi Total");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, ReservationPage_Conditional_42_Template, 2, 2, "p", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 22);
      \u0275\u0275conditionalCreate(44, ReservationPage_Conditional_44_Template, 2, 6)(45, ReservationPage_Conditional_45_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 23)(47, "ion-button", 24);
      \u0275\u0275listener("click", function ReservationPage_Template_ion_button_click_47_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(48, ReservationPage_Conditional_48_Template, 1, 0, "ion-spinner", 25)(49, ReservationPage_Conditional_49_Template, 2, 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.resId ? "Ndrysho Rezervimin" : "Shto Rezervim");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.car ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.clientName);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.startDate));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.endDate));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.validationMsg ? 33 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pricePerDay);
      \u0275\u0275property("min", 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("total-error", !ctx.isAvailable || ctx.totalPrice === 0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.diffDays > 0 && ctx.isAvailable ? 42 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.totalPrice > 0 && ctx.isAvailable ? 44 : 45);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 48 : 49);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonModal,
    IonSpinner,
    CurrencyPipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.res-content[_ngcontent-%COMP%] {\n  --background: #f4f6f9;\n}\n.car-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 18px 20px;\n  margin-bottom: 8px;\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.banner-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.75;\n  margin: 0;\n}\n.banner-model[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 2px 0 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.form-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 12px;\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px !important;\n  color: #555 !important;\n  margin-bottom: 4px;\n}\n.form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 17px;\n  --color: #111;\n}\n.datetime-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 14px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.datetime-item[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 800;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n  margin-bottom: 10px;\n}\n.datetime-item[_ngcontent-%COMP%]   .datetime-trigger[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.datetime-item[_ngcontent-%COMP%]   .datetime-trigger[_ngcontent-%COMP%]:active {\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  transform: scale(0.98);\n}\n.datetime-item[_ngcontent-%COMP%]   .datetime-trigger[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-primary);\n}\n.datetime-item[_ngcontent-%COMP%]   .datetime-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\nion-modal[_ngcontent-%COMP%] {\n  --height: 480px;\n  --width: 100%;\n  --max-width: 450px;\n  --border-radius: 20px;\n}\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  --background: #fff;\n  border-radius: 0;\n}\n.status-container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n}\n.checking-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--ion-color-medium);\n  padding: 8px 12px;\n}\n.checking-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-style: italic;\n}\n.total-box[_ngcontent-%COMP%] {\n  background: #1a3c5e;\n  border-radius: 14px;\n  padding: 18px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n  transition: background 0.3s;\n}\n.total-box.total-error[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #f0a500;\n  margin: 0;\n}\n.conflict-box[_ngcontent-%COMP%] {\n  background: #fdecea;\n  border: 2px solid #e74c3c;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.conflict-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #c0392b;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.conflict-msg[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #c0392b;\n  margin: 0;\n  line-height: 1.5;\n}\n.conflict-box[_ngcontent-%COMP%], \n.checking-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.save-section[_ngcontent-%COMP%] {\n  padding: 0 14px 40px;\n}\n.save-btn[_ngcontent-%COMP%] {\n  --background: #1a3c5e;\n  --background-disabled: #aab5c0;\n  font-size: 18px;\n  font-weight: 700;\n  height: 56px;\n  --border-radius: 14px;\n}\n/*# sourceMappingURL=reservation.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationPage, [{
    type: Component,
    args: [{ selector: "app-reservation", standalone: true, imports: [
      FormsModule,
      CurrencyPipe,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonBackButton,
      IonButton,
      IonIcon,
      IonItem,
      IonLabel,
      IonInput,
      IonDatetime,
      IonModal,
      IonSpinner
    ], template: `<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/cars" text="Prapa"></ion-back-button>
    </ion-buttons>
    <ion-title>{{ resId ? 'Ndrysho Rezervimin' : 'Shto Rezervim' }}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="res-content">

  <!-- Info makine -->
  @if (car) {
    <div class="car-banner">
      <ion-icon name="car-outline" class="banner-icon"></ion-icon>
      <div>
        <p class="banner-label">Makina</p>
        <p class="banner-model" style="font-size: 22px; font-weight: 800;">{{ car.model }}</p>
      </div>
    </div>
  }

  <!-- Formulari -->
  <div class="form-section">

    <!-- Emri i klientit -->
    <ion-item class="form-item" lines="none">
      <ion-label position="stacked" style="font-weight: 800; font-size: 18px !important; color: var(--ion-color-primary);">Emri i Klientit *</ion-label>
      <ion-input
        [(ngModel)]="clientName"
        placeholder="Shkruaj emrin..."
        autocapitalize="words"
      ></ion-input>
    </ion-item>

    <!-- Data dhe Ora e Marrjes -->
    <div class="datetime-item">
      <ion-label class="field-label">Dita e marrjes dhe Ora *</ion-label>
      <div class="datetime-trigger" id="open-start-date">
        <ion-icon name="calendar-outline"></ion-icon>
        <span>{{ formatDate(startDate) }}</span>
      </div>
      <ion-modal #startModal trigger="open-start-date">
        <ng-template>
          <ion-content>
            <ion-datetime
              presentation="date-time"
              [hourCycle]="'h23'"
              [value]="startDate"
              (ionChange)="onStartDateChange($event)"
              locale="sq-AL"
              size="cover"
              max="2030-12-31T23:59:59"
            >
              <ion-buttons slot="buttons">
                <ion-button color="primary" (click)="confirmStart(startModal)">OK</ion-button>
              </ion-buttons>
              <span slot="time-label">Ora</span>
            </ion-datetime>
          </ion-content>
        </ng-template>
      </ion-modal>
    </div>

    <!-- Data dhe Ora e Kthimit -->
    <div class="datetime-item">
      <ion-label class="field-label">Dita e kthimit dhe Ora *</ion-label>
      <div class="datetime-trigger" id="open-end-date">
        <ion-icon name="calendar-outline"></ion-icon>
        <span>{{ formatDate(endDate) }}</span>
      </div>
      <ion-modal #endModal trigger="open-end-date">
        <ng-template>
          <ion-content>
            <ion-datetime
              presentation="date-time"
              [hourCycle]="'h23'"
              [value]="endDate"
              (ionChange)="onEndDateChange($event)"
              locale="sq-AL"
              size="cover"
              max="2030-12-31T23:59:59"
            >
              <ion-buttons slot="buttons">
                <ion-button color="primary" (click)="confirmEnd(endModal)">OK</ion-button>
              </ion-buttons>
              <span slot="time-label">Ora</span>
            </ion-datetime>
          </ion-content>
        </ng-template>
      </ion-modal>
    </div>

    <!-- Mesazhi i Valdimit (Overlap / Invalid Range) -->
    @if (validationMsg) {
      <div class="validation-error-box">
        <ion-icon name="warning-outline"></ion-icon>
        <p>{{ validationMsg }}</p>
      </div>
    }

    <!-- \xC7mimi n\xEB Dit\xEB -->
    <ion-item class="form-item" lines="none">
      <ion-label position="stacked" style="font-weight: 800; font-size: 18px !important; color: var(--ion-color-primary);">\xC7mimi n\xEB Dit\xEB (\u20AC) *</ion-label>
      <ion-input
        type="number"
        [(ngModel)]="pricePerDay"
        (ionInput)="recalculate()"
        [min]="1"
        inputmode="decimal"
        placeholder="p.sh. 30"
      ></ion-input>
    </ion-item>

    

    <!-- \xC7mimi Total (live) -->
    <div class="total-box" [class.total-error]="!isAvailable || totalPrice === 0">
      <div>
        <p class="total-label">\xC7mimi Total</p>
        @if (diffDays > 0 && isAvailable) {
          <p style="margin: 4px 0 0; font-size: 14px; color: rgba(255,255,255,0.75);">
            {{ diffDays }} dit\xEB x {{ pricePerDay }}\u20AC
          </p>
        }
      </div>
      <p class="total-value" style="font-size: 32px; font-weight: 900;">
        @if (totalPrice > 0 && isAvailable) {
          {{ totalPrice | currency:'EUR':'symbol':'1.0-0' }}
        } @else {
          \u2014
        }
      </p>
    </div>

  </div>

  <!-- Butoni Ruaj -->
  <div class="save-section">
    <ion-button
      expand="block"
      [disabled]="saving"
      (click)="save()"
      class="save-btn"
    >
      @if (saving) {
        <ion-spinner name="crescent"></ion-spinner>
      } @else {
        <ion-icon name="save-outline" slot="start"></ion-icon>
        {{ resId ? 'P\xEBrdit\xEBso Rezervimin' : 'Ruaj Rezervimin' }}
      }
    </ion-button>
  </div>

</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/reservation/reservation.page.scss */\n.res-content {\n  --background: #f4f6f9;\n}\n.car-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 18px 20px;\n  margin-bottom: 8px;\n}\n.banner-icon {\n  font-size: 40px;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.banner-label {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.75;\n  margin: 0;\n}\n.banner-model {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 2px 0 0;\n}\n.form-section {\n  padding: 12px 14px;\n}\n.form-item {\n  --background: #ffffff;\n  --border-radius: 12px;\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.form-item ion-label {\n  font-weight: 600;\n  font-size: 13px !important;\n  color: #555 !important;\n  margin-bottom: 4px;\n}\n.form-item ion-input {\n  font-size: 17px;\n  --color: #111;\n}\n.datetime-item {\n  margin-bottom: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 14px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n}\n.datetime-item .field-label {\n  display: block;\n  font-weight: 800;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n  margin-bottom: 10px;\n}\n.datetime-item .datetime-trigger {\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.datetime-item .datetime-trigger:active {\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  transform: scale(0.98);\n}\n.datetime-item .datetime-trigger ion-icon {\n  font-size: 22px;\n  color: var(--ion-color-primary);\n}\n.datetime-item .datetime-trigger span {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\nion-modal {\n  --height: 480px;\n  --width: 100%;\n  --max-width: 450px;\n  --border-radius: 20px;\n}\nion-modal ion-datetime {\n  --background: #fff;\n  border-radius: 0;\n}\n.status-container {\n  margin: 16px 0;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n}\n.checking-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--ion-color-medium);\n  padding: 8px 12px;\n}\n.checking-box p {\n  margin: 0;\n  font-size: 14px;\n  font-style: italic;\n}\n.total-box {\n  background: #1a3c5e;\n  border-radius: 14px;\n  padding: 18px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n  transition: background 0.3s;\n}\n.total-box.total-error {\n  background: #7f1d1d;\n}\n.total-label {\n  font-size: 15px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n.total-value {\n  font-size: 28px;\n  font-weight: 800;\n  color: #f0a500;\n  margin: 0;\n}\n.conflict-box {\n  background: #fdecea;\n  border: 2px solid #e74c3c;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.conflict-icon {\n  font-size: 24px;\n  color: #c0392b;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.conflict-msg {\n  font-size: 15px;\n  font-weight: 600;\n  color: #c0392b;\n  margin: 0;\n  line-height: 1.5;\n}\n.conflict-box,\n.checking-box {\n  animation: fadeIn 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.save-section {\n  padding: 0 14px 40px;\n}\n.save-btn {\n  --background: #1a3c5e;\n  --background-disabled: #aab5c0;\n  font-size: 18px;\n  font-weight: 700;\n  height: 56px;\n  --border-radius: 14px;\n}\n/*# sourceMappingURL=reservation.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ChangeDetectorRef }, { type: UiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationPage, { className: "ReservationPage", filePath: "src/app/pages/reservation/reservation.page.ts", lineNumber: 29 });
})();
export {
  ReservationPage
};
//# sourceMappingURL=chunk-VXPGCXNF.js.map
