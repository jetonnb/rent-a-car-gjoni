import {
  DataService,
  UiService
} from "./chunk-MYUUSVON.js";
import {
  addOutline,
  calendarOutline,
  carSportOutline,
  logOutOutline,
  refreshOutline,
  timeOutline,
  trashOutline
} from "./chunk-3H5SGRIN.js";
import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import {
  AuthService
} from "./chunk-AMIUB7DR.js";
import "./chunk-H22GPG2J.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  Component,
  FormsModule,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonToolbar,
  NgControlStatus,
  NgModel,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
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

// src/app/pages/cars/cars.page.ts
var _c0 = () => [0, 0.45];
var _c1 = () => [1, 2, 3];
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function CarsPage_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 18)(1, "ion-card-header");
    \u0275\u0275element(2, "ion-skeleton-text", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-card-content")(4, "div", 20);
    \u0275\u0275element(5, "ion-skeleton-text", 21)(6, "ion-skeleton-text", 21)(7, "ion-skeleton-text", 21);
    \u0275\u0275elementEnd()()();
  }
}
function CarsPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, CarsPage_Conditional_21_For_2_Template, 8, 0, "ion-card", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function CarsPage_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "ion-icon", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Nuk ka makina aktive.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, 'Shtoni makin\xEBn e par\xEB me butonin "+".');
    \u0275\u0275elementEnd()();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 30);
    \u0275\u0275text(1, "E Rezervuar");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 31);
    \u0275\u0275text(1, "E lir\xEB p\xEBr \xE7do dat\xEB");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Conditional_0_Template, 2, 0, "ion-badge", 30)(1, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Conditional_1_Template, 2, 0, "ion-badge", 31);
  }
  if (rf & 2) {
    const car_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(car_r2.isReserved ? 0 : 1);
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 31);
    \u0275\u0275text(1, "Aktive");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 32);
    \u0275\u0275text(1, "Jo Aktive");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Conditional_0_Template, 2, 0, "ion-badge", 31)(1, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Conditional_1_Template, 2, 0, "ion-badge", 32);
  }
  if (rf & 2) {
    const car_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(car_r2.isActive ? 0 : 1);
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 33);
    \u0275\u0275listener("click", function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_8_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const car_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goReserve(car_r2));
    });
    \u0275\u0275element(1, "ion-icon", 34);
    \u0275\u0275text(2, " Rezervo ");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 35);
    \u0275\u0275listener("click", function CarsPage_Conditional_22_Conditional_3_For_1_Conditional_12_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const car_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.promptDelete(car_r2));
    });
    \u0275\u0275element(1, "ion-icon", 36);
    \u0275\u0275text(2, " Deaktivizo ");
    \u0275\u0275elementEnd();
  }
}
function CarsPage_Conditional_22_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 18)(1, "ion-card-header")(2, "ion-card-title", 25);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_4_Template, 2, 1)(5, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_5_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-card-content")(7, "div", 20);
    \u0275\u0275conditionalCreate(8, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_8_Template, 3, 0, "ion-button", 26);
    \u0275\u0275elementStart(9, "ion-button", 27);
    \u0275\u0275listener("click", function CarsPage_Conditional_22_Conditional_3_For_1_Template_ion_button_click_9_listener() {
      const car_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goHistory(car_r2));
    });
    \u0275\u0275element(10, "ion-icon", 28);
    \u0275\u0275text(11, " Historia ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CarsPage_Conditional_22_Conditional_3_For_1_Conditional_12_Template, 3, 0, "ion-button", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const car_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", car_r2.model, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.filter === "active" ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.filter === "active" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("fill", ctx_r3.filter === "active" ? "outline" : "solid");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.filter === "active" ? 12 : -1);
  }
}
function CarsPage_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CarsPage_Conditional_22_Conditional_3_For_1_Template, 13, 5, "ion-card", 18, _forTrack0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const carList_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275repeater(carList_r6);
  }
}
function CarsPage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalCreate(2, CarsPage_Conditional_22_Conditional_2_Template, 6, 0, "div", 22)(3, CarsPage_Conditional_22_Conditional_3_Template, 2, 0);
  }
  if (rf & 2) {
    const carList_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(1, 1, \u0275\u0275nextContext().cars$) ?? \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(carList_r7.length === 0 ? 2 : 3);
  }
}
function CarsPage_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "h2", 38);
    \u0275\u0275text(2, "Shto Makin\xEB t\xEB Re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item", 39)(4, "ion-label", 40);
    \u0275\u0275text(5, "Modeli i Makin\xEBs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CarsPage_ng_template_27_Template_ion_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newCarModel, $event) || (ctx_r3.newCarModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "ion-button", 43);
    \u0275\u0275listener("click", function CarsPage_ng_template_27_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelAdd());
    });
    \u0275\u0275text(9, " Anulo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-button", 44);
    \u0275\u0275listener("click", function CarsPage_ng_template_27_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmAddCar());
    });
    \u0275\u0275text(11, " Ruaj ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newCarModel);
    \u0275\u0275property("autofocus", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.newCarModel.trim());
  }
}
var CarsPage = class _CarsPage {
  data;
  auth;
  router;
  cdr;
  ui;
  filter = "active";
  cars$;
  loading = false;
  _sub;
  /* Modal shto makinë */
  isAddModalOpen = false;
  newCarModel = "";
  /* Modal shto makinë */
  constructor(data, auth, router, cdr, ui) {
    this.data = data;
    this.auth = auth;
    this.router = router;
    this.cdr = cdr;
    this.ui = ui;
    addIcons({ addOutline, calendarOutline, timeOutline, trashOutline, logOutOutline, carSportOutline, refreshOutline });
  }
  ngOnInit() {
    this.loadCars();
  }
  loadCars() {
    this.loading = true;
    this.cars$ = this.filter === "active" ? this.data.getCars$() : this.data.getAllCars$();
    this._sub?.unsubscribe();
    this._sub = this.cars$.subscribe({
      next: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this._sub?.unsubscribe();
  }
  filterChanged() {
    this.loadCars();
  }
  openAddModal() {
    this.newCarModel = "";
    this.isAddModalOpen = true;
    this.cdr.detectChanges();
  }
  async confirmAddCar() {
    if (this.newCarModel.trim()) {
      await this.data.addCar(this.newCarModel.trim());
    }
    this.isAddModalOpen = false;
    this.cdr.detectChanges();
  }
  cancelAdd() {
    this.isAddModalOpen = false;
    this.cdr.detectChanges();
  }
  goReserve(car) {
    this.router.navigate(["/cars", car.id, "reserve"]);
  }
  goHistory(car) {
    this.router.navigate(["/cars", car.id, "history"]);
  }
  async promptDelete(car) {
    const confirm = await this.ui.confirm("\xC7aktivizo Makin\xEBn", `A jeni i sigurt q\xEB doni t\xEB \xE7aktivizoni ${car.model}? Ajo nuk do t\xEB jet me e disponueshme per rezervim.`);
    if (confirm) {
      const loader = await this.ui.showLoading("Duke \xE7aktivizuar makin\xEBn...");
      try {
        await this.data.softDeleteCar(car.id);
        await this.ui.showSuccess("Makina u \xE7aktivizua me sukses.");
      } catch (e) {
        await this.ui.showError("Ndodhi nj\xEB gabim. Ju lutem provoni p\xEBrs\xEBri.");
      } finally {
        loader.dismiss();
      }
    }
  }
  async reactivateCar(car) {
    const loader = await this.ui.showLoading("Duke aktivizuar makin\xEBn...");
    try {
      await this.data.activateCar(car.id);
      await this.ui.showSuccess("Makina u aktivizua me sukses.");
    } catch (e) {
      await this.ui.showError("Ndodhi nj\xEB gabim gjat\xEB aktivizimit.");
    } finally {
      loader.dismiss();
    }
  }
  async logout() {
    const confirm = await this.ui.confirm("Dilni nga llogaria?", "A jeni i sigurt q\xEB doni t\xEB dilni nga aplikacioni?");
    if (confirm) {
      this.auth.logout();
    }
  }
  static \u0275fac = function CarsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarsPage)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarsPage, selectors: [["app-cars"]], decls: 28, vars: 6, consts: [["slot", "start", 2, "padding-left", "12px"], [2, "display", "flex", "align-items", "center", "gap", "10px"], ["src", "logo (2).png", "alt", "Logo", 2, "height", "36px", "width", "auto", "filter", "brightness(0) invert(1)"], [2, "font-weight", "700", "font-size", "19px", "color", "#fff"], ["slot", "end"], ["fill", "clear", 1, "logout-btn", 3, "click"], [2, "font-size", "14px", "margin-right", "6px", "font-weight", "600", "color", "#fff"], ["name", "log-out-outline", "slot", "end", 2, "font-size", "24px", "color", "#fff"], [1, "cars-content"], [2, "padding", "10px 16px"], [3, "ngModelChange", "ionChange", "ngModel"], ["value", "active"], ["value", "all"], [2, "padding", "0 8px"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["color", "secondary", 1, "fab-add", 3, "click"], ["name", "add-outline"], [3, "didDismiss", "isOpen", "initialBreakpoint", "breakpoints"], [1, "car-card"], ["animated", "", 2, "width", "60%", "height", "24px", "border-radius", "4px"], [1, "car-actions"], ["animated", "", 2, "width", "30%", "height", "36px", "border-radius", "8px"], [1, "empty-state"], ["name", "car-sport-outline", 1, "empty-icon"], [1, "empty-hint"], [2, "font-size", "22px", "font-weight", "800"], ["fill", "solid", "color", "primary", 1, "action-btn"], ["color", "primary", 1, "action-btn", 3, "click", "fill"], ["name", "time-outline", "slot", "start"], ["fill", "outline", "color", "danger", 1, "action-btn", "delete-btn"], ["color", "warning", 2, "margin-left", "8px"], ["color", "success", 2, "margin-left", "8px"], ["color", "danger", 2, "margin-left", "8px"], ["fill", "solid", "color", "primary", 1, "action-btn", 3, "click"], ["name", "calendar-outline", "slot", "start"], ["fill", "outline", "color", "danger", 1, "action-btn", "delete-btn", 3, "click"], ["name", "trash-outline", "slot", "start"], [1, "modal-content"], [1, "modal-title"], ["lines", "none", 1, "modal-input-item"], ["position", "stacked"], ["placeholder", "p.sh. Toyota Corolla", 3, "ngModelChange", "ngModel", "autofocus"], [1, "modal-actions"], ["fill", "outline", "color", "medium", "expand", "block", 1, "modal-btn", 3, "click"], ["fill", "solid", "color", "primary", "expand", "block", 1, "modal-btn", 3, "click", "disabled"]], template: function CarsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "div", 1);
      \u0275\u0275element(4, "img", 2);
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, 'Rent a Car "Gjoni"');
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ion-buttons", 4)(8, "ion-button", 5);
      \u0275\u0275listener("click", function CarsPage_Template_ion_button_click_8_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "Dil");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "ion-icon", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "ion-content", 8)(13, "div", 9)(14, "ion-segment", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CarsPage_Template_ion_segment_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return $event;
      });
      \u0275\u0275listener("ionChange", function CarsPage_Template_ion_segment_ionChange_14_listener() {
        return ctx.filterChanged();
      });
      \u0275\u0275elementStart(15, "ion-segment-button", 11)(16, "ion-label");
      \u0275\u0275text(17, "Makinat Aktive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-segment-button", 12)(19, "ion-label");
      \u0275\u0275text(20, "Historia te gjithave");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(21, CarsPage_Conditional_21_Template, 3, 1, "div", 13)(22, CarsPage_Conditional_22_Template, 4, 5);
      \u0275\u0275elementStart(23, "ion-fab", 14)(24, "ion-fab-button", 15);
      \u0275\u0275listener("click", function CarsPage_Template_ion_fab_button_click_24_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(25, "ion-icon", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "ion-modal", 17);
      \u0275\u0275listener("didDismiss", function CarsPage_Template_ion_modal_didDismiss_26_listener() {
        return ctx.cancelAdd();
      });
      \u0275\u0275template(27, CarsPage_ng_template_27_Template, 12, 3, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading ? 21 : 22);
      \u0275\u0275advance(5);
      \u0275\u0275property("isOpen", ctx.isAddModalOpen)("initialBreakpoint", 0.45)("breakpoints", \u0275\u0275pureFunction0(5, _c0));
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonItem,
    IonLabel,
    IonModal,
    IonInput,
    IonSegment,
    IonSegmentButton,
    IonBadge,
    IonSkeletonText,
    AsyncPipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.cars-content[_ngcontent-%COMP%] {\n  --background: #f4f6f9;\n}\n.title-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 20px;\n}\n.car-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n.car-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-weight: 600;\n  font-size: 13px;\n  --border-radius: 8px;\n  height: 34px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 34px;\n  font-size: 13px;\n  min-width: unset;\n  margin: 0;\n  --border-radius: 8px;\n  --color: #ff3b30;\n  --background: transparent;\n  --border-color: rgba(255, 59, 48, 0.2);\n  --border-style: solid;\n  --border-width: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.delete-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 12px 12px 0;\n  border-color: transparent #ff1a0d transparent transparent;\n  z-index: 1;\n}\n.delete-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 2px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  color: #888;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 72px;\n  color: #c5d0de;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 4px 0;\n  font-weight: 500;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #aaa !important;\n}\n.fab-add[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 16px rgba(240, 165, 0, 0.5);\n  width: 60px;\n  height: 60px;\n}\n.fab-add[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 24px 20px 32px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.modal-input-item[_ngcontent-%COMP%] {\n  --background: #f4f6f9;\n  --border-radius: 10px;\n  --padding-start: 14px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n.modal-input-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px !important;\n  color: #444 !important;\n}\n.modal-input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.modal-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 16px;\n  font-weight: 600;\n  height: 48px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  --color: #ffffff;\n}\n/*# sourceMappingURL=cars.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarsPage, [{
    type: Component,
    args: [{ selector: "app-cars", standalone: true, imports: [
      AsyncPipe,
      FormsModule,
      IonHeader,
      IonToolbar,
      IonContent,
      IonButtons,
      IonButton,
      IonIcon,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonFab,
      IonFabButton,
      IonItem,
      IonLabel,
      IonModal,
      IonInput,
      IonSegment,
      IonSegmentButton,
      IonBadge,
      IonSkeletonText
    ], template: `<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start" style="padding-left: 12px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="logo (2).png" 
             style="height: 36px; width: auto; filter: brightness(0) invert(1);" 
             alt="Logo">
        <span style="font-weight: 700; font-size: 19px; color: #fff;">Rent a Car "Gjoni"</span>
      </div>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button (click)="logout()" fill="clear" class="logout-btn">
        <span style="font-size: 14px; margin-right: 6px; font-weight: 600; color: #fff;">Dil</span>
        <ion-icon name="log-out-outline" slot="end" style="font-size:24px; color:#fff"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content class="cars-content">

  <!-- Segment Filtrues -->
  <div style="padding: 10px 16px;">
    <ion-segment [(ngModel)]="filter" (ionChange)="filterChanged()">
      <ion-segment-button value="active">
        <ion-label>Makinat Aktive</ion-label>
      </ion-segment-button>
      <ion-segment-button value="all">
        <ion-label>Historia te gjithave</ion-label>
      </ion-segment-button>
    </ion-segment>
  </div>

  <!-- Lista e makinave -->
  @if (loading) {
    <div style="padding: 0 8px;">
      @for (i of [1,2,3]; track i) {
        <ion-card class="car-card">
          <ion-card-header>
            <ion-skeleton-text animated style="width: 60%; height: 24px; border-radius: 4px;"></ion-skeleton-text>
          </ion-card-header>
          <ion-card-content>
            <div class="car-actions">
              <ion-skeleton-text animated style="width: 30%; height: 36px; border-radius: 8px;"></ion-skeleton-text>
              <ion-skeleton-text animated style="width: 30%; height: 36px; border-radius: 8px;"></ion-skeleton-text>
              <ion-skeleton-text animated style="width: 30%; height: 36px; border-radius: 8px;"></ion-skeleton-text>
            </div>
          </ion-card-content>
        </ion-card>
      }
    </div>
  } @else {
    @let carList = (cars$ | async) ?? [];
    @if (carList.length === 0) {
      <div class="empty-state">
        <ion-icon name="car-sport-outline" class="empty-icon"></ion-icon>
        <p>Nuk ka makina aktive.</p>
        <p class="empty-hint">Shtoni makin\xEBn e par\xEB me butonin "+".</p>
      </div>
    } @else {
      @for (car of carList; track car.id) {
      <ion-card class="car-card">
        <ion-card-header>
          <ion-card-title style="font-size: 22px; font-weight: 800;">
            {{ car.model }}
            @if (filter === 'active') {
              @if (car.isReserved) {
                <ion-badge color="warning" style="margin-left: 8px;">E Rezervuar</ion-badge>
              } @else {
                <ion-badge color="success" style="margin-left: 8px;">E lir\xEB p\xEBr \xE7do dat\xEB</ion-badge>
              }
            } @else {
              @if (car.isActive) {
                <ion-badge color="success" style="margin-left: 8px;">Aktive</ion-badge>
              } @else {
                <ion-badge color="danger" style="margin-left: 8px;">Jo Aktive</ion-badge>
              }
            }
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div class="car-actions">
            @if (filter === 'active') {
              <ion-button fill="solid" color="primary" (click)="goReserve(car)" class="action-btn">
                <ion-icon name="calendar-outline" slot="start"></ion-icon>
                Rezervo
              </ion-button>
            }
            <ion-button [fill]="filter === 'active' ? 'outline' : 'solid'" color="primary" (click)="goHistory(car)" class="action-btn">
              <ion-icon name="time-outline" slot="start"></ion-icon>
              Historia
            </ion-button>
            @if (filter === 'active') {
              <ion-button fill="outline" color="danger" (click)="promptDelete(car)" class="action-btn delete-btn">
                <ion-icon name="trash-outline" slot="start"></ion-icon>
                Deaktivizo
              </ion-button>
            }
          </div>
        </ion-card-content>
      </ion-card>
    }
  }
}

  <!-- FAB Shto makin\xEB -->
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button (click)="openAddModal()" color="secondary" class="fab-add">
      <ion-icon name="add-outline"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<!-- \u2500\u2500\u2500 Modal: Shto Makin\xEB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ion-modal [isOpen]="isAddModalOpen" (didDismiss)="cancelAdd()" [initialBreakpoint]="0.45" [breakpoints]="[0, 0.45]">
  <ng-template>
    <div class="modal-content">
      <h2 class="modal-title">Shto Makin\xEB t\xEB Re</h2>
      <ion-item class="modal-input-item" lines="none">
        <ion-label position="stacked">Modeli i Makin\xEBs</ion-label>
        <ion-input
          [(ngModel)]="newCarModel"
          placeholder="p.sh. Toyota Corolla"
          [autofocus]="true"
        ></ion-input>
      </ion-item>
      <div class="modal-actions">
        <ion-button fill="outline" color="medium" (click)="cancelAdd()" expand="block" class="modal-btn">
          Anulo
        </ion-button>
        <ion-button fill="solid" color="primary" (click)="confirmAddCar()"
          [disabled]="!newCarModel.trim()" expand="block" class="modal-btn">
          Ruaj
        </ion-button>
      </div>
    </div>
  </ng-template>
</ion-modal>


`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/cars/cars.page.scss */\n.cars-content {\n  --background: #f4f6f9;\n}\n.title-icon {\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 20px;\n}\n.car-card ion-card-title {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n.car-actions {\n  display: flex;\n  gap: 6px;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.action-btn {\n  flex: 1;\n  min-width: 0;\n  font-weight: 600;\n  font-size: 13px;\n  --border-radius: 8px;\n  height: 34px;\n}\n.delete-btn {\n  flex: 0 0 auto;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 34px;\n  font-size: 13px;\n  min-width: unset;\n  margin: 0;\n  --border-radius: 8px;\n  --color: #ff3b30;\n  --background: transparent;\n  --border-color: rgba(255, 59, 48, 0.2);\n  --border-style: solid;\n  --border-width: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.delete-btn::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 12px 12px 0;\n  border-color: transparent #ff1a0d transparent transparent;\n  z-index: 1;\n}\n.delete-btn ion-icon {\n  font-size: 16px;\n  margin-right: 2px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  color: #888;\n}\n.empty-icon {\n  font-size: 72px;\n  color: #c5d0de;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  font-size: 17px;\n  margin: 4px 0;\n  font-weight: 500;\n}\n.empty-hint {\n  font-size: 14px !important;\n  color: #aaa !important;\n}\n.fab-add {\n  --box-shadow: 0 4px 16px rgba(240, 165, 0, 0.5);\n  width: 60px;\n  height: 60px;\n}\n.fab-add ion-icon {\n  font-size: 28px;\n}\n.modal-content {\n  padding: 24px 20px 32px;\n}\n.modal-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.modal-input-item {\n  --background: #f4f6f9;\n  --border-radius: 10px;\n  --padding-start: 14px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n.modal-input-item ion-label {\n  font-weight: 600;\n  font-size: 13px !important;\n  color: #444 !important;\n}\n.modal-input-item ion-input {\n  font-size: 17px;\n}\n.modal-actions {\n  display: flex;\n  gap: 12px;\n}\n.modal-btn {\n  flex: 1;\n  font-size: 16px;\n  font-weight: 600;\n  height: 48px;\n}\n.logout-btn {\n  --color: #ffffff;\n}\n/*# sourceMappingURL=cars.page.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }, { type: UiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarsPage, { className: "CarsPage", filePath: "src/app/pages/cars/cars.page.ts", lineNumber: 37 });
})();
export {
  CarsPage
};
//# sourceMappingURL=chunk-OLZDKYPN.js.map
