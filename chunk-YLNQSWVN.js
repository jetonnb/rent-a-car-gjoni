import {
  DataService,
  UiService
} from "./chunk-EFZJ2WTN.js";
import {
  calendarOutline,
  carOutline,
  cashOutline,
  createOutline,
  personOutline,
  refreshOutline,
  trashOutline
} from "./chunk-3H5SGRIN.js";
import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import "./chunk-SRZ7KN5Z.js";
import {
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectorRef,
  Component,
  CurrencyPipe,
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-APU5R2IQ.js";
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

// src/app/pages/history/history.page.ts
var _c0 = () => [1, 2];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function HistoryPage_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 9);
    \u0275\u0275text(1, "Aktive");
    \u0275\u0275elementEnd();
  }
}
function HistoryPage_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-badge", 10);
    \u0275\u0275text(1, "Joaktive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-button", 11);
    \u0275\u0275listener("click", function HistoryPage_Conditional_7_Conditional_8_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactivateCar());
    });
    \u0275\u0275element(3, "ion-icon", 12);
    \u0275\u0275text(4, " B\xEBje Aktive ");
    \u0275\u0275elementEnd();
  }
}
function HistoryPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "ion-icon", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "p", 7);
    \u0275\u0275text(4, "Makina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, HistoryPage_Conditional_7_Conditional_7_Template, 2, 0, "ion-badge", 9)(8, HistoryPage_Conditional_7_Conditional_8_Template, 5, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.car.model, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.car.isActive ? 7 : 8);
  }
}
function HistoryPage_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 13)(1, "ion-card-content")(2, "div", 14);
    \u0275\u0275element(3, "ion-skeleton-text", 15)(4, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275element(6, "ion-skeleton-text", 17)(7, "ion-skeleton-text", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275element(9, "ion-skeleton-text", 20)(10, "ion-skeleton-text", 21);
    \u0275\u0275elementEnd()()();
  }
}
function HistoryPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, HistoryPage_Conditional_8_For_2_Template, 11, 0, "ion-card", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HistoryPage_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Nuk ka rezervime p\xEBr k\xEBt\xEB makin\xEB.");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPage_Conditional_9_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 13)(1, "ion-card-content")(2, "div", 25);
    \u0275\u0275element(3, "ion-icon", 26);
    \u0275\u0275elementStart(4, "div")(5, "p", 27);
    \u0275\u0275text(6, "Klienti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275element(10, "ion-icon", 29);
    \u0275\u0275elementStart(11, "div")(12, "p", 30);
    \u0275\u0275text(13, "Marrja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25);
    \u0275\u0275element(17, "ion-icon", 32);
    \u0275\u0275elementStart(18, "div")(19, "p", 30);
    \u0275\u0275text(20, "Kthimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 31);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 33)(24, "span", 34);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 35);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 36)(30, "ion-button", 37);
    \u0275\u0275listener("click", function HistoryPage_Conditional_9_Conditional_3_For_2_Template_ion_button_click_30_listener() {
      const res_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editReservation(res_r4));
    });
    \u0275\u0275element(31, "ion-icon", 38);
    \u0275\u0275text(32, " Ndrysho ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-button", 39);
    \u0275\u0275listener("click", function HistoryPage_Conditional_9_Conditional_3_For_2_Template_ion_button_click_33_listener() {
      const res_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promptDelete(res_r4));
    });
    \u0275\u0275element(34, "ion-icon", 40);
    \u0275\u0275text(35, " Fshi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const res_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(res_r4.clientName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(res_r4.startDate));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(res_r4.endDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getDays(res_r4), " dit\xEB x ", res_r4.pricePerDay, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 6, res_r4.totalPrice, "EUR", "symbol", "1.0-0"));
  }
}
function HistoryPage_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HistoryPage_Conditional_9_Conditional_3_For_2_Template, 36, 11, "ion-card", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const resList_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(resList_r5);
  }
}
function HistoryPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalCreate(2, HistoryPage_Conditional_9_Conditional_2_Template, 4, 0, "div", 22)(3, HistoryPage_Conditional_9_Conditional_3_Template, 3, 0, "div", 23);
  }
  if (rf & 2) {
    const resList_r6 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(1, 1, \u0275\u0275nextContext().reservations$) ?? \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(resList_r6.length === 0 ? 2 : 3);
  }
}
var HistoryPage = class _HistoryPage {
  route;
  router;
  data;
  cdr;
  ui;
  car;
  reservations$;
  loading = false;
  _subs = [];
  constructor(route, router, data, cdr, ui) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.cdr = cdr;
    this.ui = ui;
    addIcons({
      personOutline,
      calendarOutline,
      cashOutline,
      carOutline,
      trashOutline,
      createOutline,
      refreshOutline
    });
  }
  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get("id") ?? "";
    this._subs.push(this.data.getCarById$(carId).subscribe((c) => {
      this.car = c;
      this.cdr.detectChanges();
    }));
    this.loading = true;
    this.reservations$ = this.data.getReservationsForCar$(carId);
    this._subs.push(this.reservations$.subscribe({
      next: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    }));
  }
  ngOnDestroy() {
    this._subs.forEach((s) => s.unsubscribe());
  }
  formatDate(iso) {
    if (!iso)
      return "\u2014";
    const d = new Date(iso);
    const months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"];
    const pad = (n) => n < 10 ? "0" + n : n.toString();
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  getDays(res) {
    if (!res.pricePerDay)
      return 1;
    return Math.max(1, Math.round(res.totalPrice / res.pricePerDay));
  }
  editReservation(res) {
    this.router.navigate(["/cars", res.carId, "reserve", res.id]);
  }
  async promptDelete(res) {
    const confirm = await this.ui.confirm("Fshirja e Rezervimit", "A jeni i sigurt q\xEB doni ta fshini k\xEBt\xEB rezervim? Ky veprim nuk mund t\xEB kthehet mbrapa.");
    if (confirm) {
      const loader = await this.ui.showLoading("Duke fshir\xEB rezervimin...");
      try {
        await this.data.deleteReservation(res.id);
        await this.ui.showSuccess("Rezervimi u fshie me sukses.");
      } catch (e) {
        await this.ui.showError("Ndodhi nj\xEB gabim gjat\xEB fshirjes. Ju lutem provoni p\xEBrs\xEBri.");
      } finally {
        loader.dismiss();
      }
    }
  }
  async reactivateCar() {
    if (!this.car)
      return;
    const confirm = await this.ui.confirm("Aktivizo Makin\xEBn", `A jeni i sigurt q\xEB doni ta ktheni ${this.car.model} n\xEB aktive?`);
    if (confirm) {
      const loader = await this.ui.showLoading("Duke aktivizuar makin\xEBn...");
      try {
        await this.data.activateCar(this.car.id);
        await this.ui.showSuccess("Makina u aktivizua me sukses.");
      } catch (e) {
        await this.ui.showError("Ndodhi nj\xEB gabim. Ju lutem provoni p\xEBrs\xEBri.");
      } finally {
        loader.dismiss();
      }
    }
  }
  static \u0275fac = function HistoryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryPage, selectors: [["app-history"]], decls: 10, vars: 2, consts: [["slot", "start"], ["defaultHref", "/cars", "text", "Prapa"], [1, "hist-content"], [1, "car-banner"], [1, "reservations-list", 2, "padding", "0 8px"], ["name", "car-outline", 1, "banner-icon"], [1, "banner-info"], [1, "banner-label"], [1, "banner-model", 2, "font-size", "24px", "font-weight", "800", "margin-top", "4px"], ["color", "success", 2, "margin-left", "8px"], ["color", "danger", 2, "margin-left", "8px"], ["fill", "solid", "color", "success", "size", "small", 2, "height", "24px", "--padding-start", "8px", "--padding-end", "8px", "margin-left", "8px", 3, "click"], ["name", "refresh-outline", "slot", "start", 2, "margin-right", "4px", "font-size", "14px"], [1, "res-card"], [2, "margin-bottom", "12px"], ["animated", "", 2, "width", "40%", "height", "16px", "margin-bottom", "8px"], ["animated", "", 2, "width", "80%", "height", "20px"], ["animated", "", 2, "width", "30%", "height", "16px", "margin-bottom", "8px"], ["animated", "", 2, "width", "70%", "height", "20px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-top", "16px"], ["animated", "", 2, "width", "40%", "height", "20px"], ["animated", "", 2, "width", "20%", "height", "24px"], [1, "empty-state"], [1, "reservations-list"], ["name", "calendar-outline", 1, "empty-icon"], [1, "res-row"], ["name", "person-outline", 1, "row-icon"], [1, "row-label", 2, "font-weight", "700", "color", "var(--ion-color-primary)"], [1, "row-value", 2, "font-size", "18px", "font-weight", "500"], ["name", "calendar-outline", 1, "row-icon"], [1, "row-label"], [1, "row-value"], ["name", "calendar-outline", 1, "row-icon", "return-icon"], [1, "price-row", 2, "background", "rgba(var(--ion-color-primary-rgb), 0.05)", "padding", "12px", "border-radius", "8px"], [1, "price-per-day", 2, "font-weight", "600"], [1, "total-price", 2, "font-size", "22px", "font-weight", "800", "color", "var(--ion-color-primary)"], [1, "actions-row"], ["fill", "clear", "color", "primary", 3, "click"], ["name", "create-outline", "slot", "start"], ["fill", "clear", "color", "danger", 3, "click"], ["name", "trash-outline", "slot", "start"]], template: function HistoryPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      \u0275\u0275element(3, "ion-back-button", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title");
      \u0275\u0275text(5, "Historia e Makin\xEBs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 2);
      \u0275\u0275conditionalCreate(7, HistoryPage_Conditional_7_Template, 9, 2, "div", 3);
      \u0275\u0275conditionalCreate(8, HistoryPage_Conditional_8_Template, 3, 1, "div", 4)(9, HistoryPage_Conditional_9_Template, 4, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.car ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 8 : 9);
    }
  }, dependencies: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonButton,
    IonBadge,
    IonSkeletonText,
    AsyncPipe,
    CurrencyPipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.hist-content[_ngcontent-%COMP%] {\n  --background: #f4f6f9;\n}\n.car-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 18px 20px;\n  margin-bottom: 8px;\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.banner-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.banner-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.75;\n  margin: 0;\n}\n.banner-model[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 2px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.reservations-list[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.res-card[_ngcontent-%COMP%] {\n  margin: 10px 12px;\n}\n.res-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.res-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.row-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.return-icon[_ngcontent-%COMP%] {\n  color: #888;\n}\n.row-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 2px;\n}\n.row-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f0f4f8;\n  border-radius: 10px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.price-per-day[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  font-weight: 500;\n}\n.total-price[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 8px;\n  border-top: 1px dashed #eee;\n  padding-top: 8px;\n}\n.actions-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  color: #888;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 72px;\n  color: #c5d0de;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  margin: 0;\n}\n/*# sourceMappingURL=history.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryPage, [{
    type: Component,
    args: [{ selector: "app-history", standalone: true, imports: [
      AsyncPipe,
      CurrencyPipe,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButtons,
      IonBackButton,
      IonCard,
      IonCardContent,
      IonIcon,
      IonButton,
      IonBadge,
      IonSkeletonText
    ], template: `<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/cars" text="Prapa"></ion-back-button>
    </ion-buttons>
    <ion-title>Historia e Makin\xEBs</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="hist-content">

  <!-- Banner makine -->
  @if (car) {
    <div class="car-banner">
      <ion-icon name="car-outline" class="banner-icon"></ion-icon>
      <div class="banner-info">
        <p class="banner-label">Makina</p>
        <p class="banner-model" style="font-size: 24px; font-weight: 800; margin-top: 4px;">
          {{ car.model }}
          @if (car.isActive) {
            <ion-badge color="success" style="margin-left: 8px;">Aktive</ion-badge>
          } @else {
            <ion-badge color="danger" style="margin-left: 8px;">Joaktive</ion-badge>
            <ion-button fill="solid" color="success" size="small" (click)="reactivateCar()" style="height: 24px; --padding-start: 8px; --padding-end: 8px; margin-left:8px">
              <ion-icon name="refresh-outline" slot="start" style="margin-right: 4px; font-size: 14px;"></ion-icon>
              B\xEBje Aktive
            </ion-button>
          }
        </p>
      </div>
    </div>
  }

  <!-- Lista rezervimeve -->
  @if (loading) {
    <div class="reservations-list" style="padding: 0 8px;">
      @for (i of [1,2]; track i) {
        <ion-card class="res-card">
          <ion-card-content>
            <div style="margin-bottom: 12px;">
              <ion-skeleton-text animated style="width: 40%; height: 16px; margin-bottom: 8px;"></ion-skeleton-text>
              <ion-skeleton-text animated style="width: 80%; height: 20px;"></ion-skeleton-text>
            </div>
            <div style="margin-bottom: 12px;">
              <ion-skeleton-text animated style="width: 30%; height: 16px; margin-bottom: 8px;"></ion-skeleton-text>
              <ion-skeleton-text animated style="width: 70%; height: 20px;"></ion-skeleton-text>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
              <ion-skeleton-text animated style="width: 40%; height: 20px;"></ion-skeleton-text>
              <ion-skeleton-text animated style="width: 20%; height: 24px;"></ion-skeleton-text>
            </div>
          </ion-card-content>
        </ion-card>
      }
    </div>
  } @else {
    @let resList = (reservations$ | async) ?? [];
    @if (resList.length === 0) {
      <div class="empty-state">
        <ion-icon name="calendar-outline" class="empty-icon"></ion-icon>
        <p>Nuk ka rezervime p\xEBr k\xEBt\xEB makin\xEB.</p>
      </div>
    } @else {
      <div class="reservations-list">
        @for (res of resList; track res.id) {
        <ion-card class="res-card">
          <ion-card-content>

            <!-- Klienti -->
            <div class="res-row">
              <ion-icon name="person-outline" class="row-icon"></ion-icon>
              <div>
                <p class="row-label" style="font-weight: 700; color: var(--ion-color-primary);">Klienti</p>
                <p class="row-value" style="font-size: 18px; font-weight: 500;">{{ res.clientName }}</p>
              </div>
            </div>

            <!-- Data e marrjes -->
            <div class="res-row">
              <ion-icon name="calendar-outline" class="row-icon"></ion-icon>
              <div>
                <p class="row-label">Marrja</p>
                <p class="row-value">{{ formatDate(res.startDate) }}</p>
              </div>
            </div>

            <!-- Data e kthimit -->
            <div class="res-row">
              <ion-icon name="calendar-outline" class="row-icon return-icon"></ion-icon>
              <div>
                <p class="row-label">Kthimi</p>
                <p class="row-value">{{ formatDate(res.endDate) }}</p>
              </div>
            </div>

            <!-- \xC7mimi -->
            <div class="price-row" style="background: rgba(var(--ion-color-primary-rgb), 0.05); padding: 12px; border-radius: 8px;">
              <span class="price-per-day" style="font-weight: 600;">{{ getDays(res) }} dit\xEB x {{ res.pricePerDay }}\u20AC</span>
              <span class="total-price" style="font-size: 22px; font-weight: 800; color: var(--ion-color-primary);">{{ res.totalPrice | currency:'EUR':'symbol':'1.0-0' }}</span>
            </div>

            <!-- Veprimet -->
            <div class="actions-row">
              <ion-button fill="clear" color="primary" (click)="editReservation(res)">
                <ion-icon name="create-outline" slot="start"></ion-icon>
                Ndrysho
              </ion-button>
              <ion-button fill="clear" color="danger" (click)="promptDelete(res)">
                <ion-icon name="trash-outline" slot="start"></ion-icon>
                Fshi
              </ion-button>
            </div>

          </ion-card-content>
        </ion-card>
      }
    </div>
  }
}

</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/history/history.page.scss */\n.hist-content {\n  --background: #f4f6f9;\n}\n.car-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 18px 20px;\n  margin-bottom: 8px;\n}\n.banner-icon {\n  font-size: 40px;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.banner-info {\n  flex: 1;\n}\n.banner-label {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.75;\n  margin: 0;\n}\n.banner-model {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 2px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.reservations-list {\n  padding: 4px 0;\n}\n.res-card {\n  margin: 10px 12px;\n}\n.res-card ion-card-content {\n  padding: 16px;\n}\n.res-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.row-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.return-icon {\n  color: #888;\n}\n.row-label {\n  font-size: 12px;\n  color: #888;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 2px;\n}\n.row-value {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0;\n}\n.price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f0f4f8;\n  border-radius: 10px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.price-per-day {\n  font-size: 14px;\n  color: #777;\n  font-weight: 500;\n}\n.total-price {\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.actions-row {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 8px;\n  border-top: 1px dashed #eee;\n  padding-top: 8px;\n}\n.actions-row ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  color: #888;\n}\n.empty-icon {\n  font-size: 72px;\n  color: #c5d0de;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  font-size: 17px;\n  font-weight: 500;\n  margin: 0;\n}\n/*# sourceMappingURL=history.page.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ChangeDetectorRef }, { type: UiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryPage, { className: "HistoryPage", filePath: "src/app/pages/history/history.page.ts", lineNumber: 32 });
})();
export {
  HistoryPage
};
//# sourceMappingURL=chunk-YLNQSWVN.js.map
