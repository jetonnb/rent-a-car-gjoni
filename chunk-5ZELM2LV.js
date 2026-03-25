import {
  carOutline,
  lockClosedOutline,
  personOutline
} from "./chunk-3H5SGRIN.js";
import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import {
  AuthService
} from "./chunk-BTRVVDJ6.js";
import {
  ChangeDetectorRef,
  Component,
  FormsModule,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSpinner,
  IonText,
  NgControlStatus,
  NgModel,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/login/login.page.ts
function LoginPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "ion-text", 16)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginPage_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 15);
  }
}
function LoginPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hyr ");
  }
}
var LoginPage = class _LoginPage {
  auth;
  router;
  cdr;
  username = "";
  password = "";
  error = "";
  loading = false;
  constructor(auth, router, cdr) {
    this.auth = auth;
    this.router = router;
    this.cdr = cdr;
    addIcons({ carOutline, lockClosedOutline, personOutline });
  }
  async login() {
    this.error = "";
    if (!this.username.trim()) {
      this.error = "Ju lutem shkruani emrin e p\xEBrdoruesit.";
      return;
    }
    if (!this.password.trim()) {
      this.error = "Ju lutem shkruani fjal\xEBkalimin.";
      return;
    }
    this.loading = true;
    try {
      const loginPromise = this.auth.login(this.username, this.password);
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject({ code: "timeout" }), 15e3));
      await Promise.race([loginPromise, timeoutPromise]);
      this.router.navigate(["/cars"]);
    } catch (e) {
      console.error("Gabim gjat\xEB login (Detaje):", e);
      const errCode = e?.code || "";
      const errMsg = e?.message || "";
      if (errCode === "timeout") {
        this.error = "Sh\xEBrbimi po vonohet shum. Ju lutem kontrolloni internetin dhe provoni p\xEBrs\xEBri.";
      } else if (errCode.includes("invalid-credential") || errCode.includes("user-not-found") || errCode.includes("wrong-password") || errMsg.includes("INVALID_LOGIN_CREDENTIALS")) {
        this.error = "Emri i p\xEBrdoruesit ose fjal\xEBkalimi nuk \xEBsht\xEB i sakt\xEB. Ju lutem kontrolloni t\xEB dh\xEBnat.";
      } else if (errCode.includes("too-many-requests")) {
        this.error = "Shum\xEB tentativa t\xEB d\xEBshtuara. Ju lutem provoni p\xEBrs\xEBri pas pak minutash.";
      } else {
        this.error = "Ndodhi nj\xEB gabim gjat\xEB identifikimit. Ju lutem provoni p\xEBrs\xEBri.";
      }
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 25, vars: 7, consts: [["fullscreen", "", 1, "login-content"], [1, "login-wrapper"], [1, "brand"], [1, "logo-circle", 2, "background", "none", "box-shadow", "none"], ["src", "logo (2).png", "alt", "Logo", 2, "width", "120px", "height", "auto", "filter", "brightness(0) invert(1)"], [1, "brand-title"], [1, "brand-subtitle"], [1, "login-card"], [1, "login-heading"], ["lines", "none", 1, "input-item"], ["position", "stacked"], ["type", "text", "placeholder", "p.sh. admin", "autocomplete", "username", 3, "ngModelChange", "ngModel", "disabled"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 3, "ngModelChange", "ngModel", "disabled"], [1, "error-box"], ["expand", "block", 1, "login-btn", 3, "click", "disabled"], ["name", "crescent"], ["color", "danger"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "Rent a Car");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Gjoni");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ion-card", 7)(10, "ion-card-content")(11, "p", 8);
      \u0275\u0275text(12, "Hyrja");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-item", 9)(14, "ion-label", 10);
      \u0275\u0275text(15, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ion-input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "ion-item", 9)(18, "ion-label", 10);
      \u0275\u0275text(19, "Fjal\xEBkalimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ion-input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(21, LoginPage_Conditional_21_Template, 4, 1, "div", 13);
      \u0275\u0275elementStart(22, "ion-button", 14);
      \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_22_listener() {
        return ctx.login();
      });
      \u0275\u0275conditionalCreate(23, LoginPage_Conditional_23_Template, 1, 0, "ion-spinner", 15)(24, LoginPage_Conditional_24_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || !ctx.username || !ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 23 : 24);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonSpinner
  ], styles: ['@charset "UTF-8";\n\n\n\n.login-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      160deg,\n      #1a3c5e 0%,\n      #2a5c8e 50%,\n      #1a3c5e 100%);\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 24px 16px 40px;\n}\n.brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ffffff;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f0a500;\n  font-weight: 600;\n  margin: 4px 0 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: 0;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.login-heading[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.input-item[_ngcontent-%COMP%] {\n  --background: #f4f6f9;\n  --border-radius: 10px;\n  --padding-start: 14px;\n  --inner-padding-end: 14px;\n  margin-bottom: 14px;\n  border-radius: 10px;\n}\n.input-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333 !important;\n  font-size: 13px !important;\n  margin-bottom: 4px;\n}\n.input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 17px;\n  --color: #111;\n}\n.error-box[_ngcontent-%COMP%] {\n  background: #fdecea;\n  border: 1px solid #e74c3c;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n}\n.error-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.login-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  --background: var(--ion-color-primary);\n  --background-activated: var(--ion-color-primary-shade);\n  font-size: 18px;\n  font-weight: 700;\n  height: 52px;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      FormsModule,
      IonContent,
      IonCard,
      IonCardContent,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      IonText,
      IonSpinner
    ], template: '<ion-content class="login-content" fullscreen>\n  <div class="login-wrapper">\n\n    <!-- Logo / Titull -->\n    <div class="brand">\n      <div class="logo-circle" style="background: none; box-shadow: none;">\n        <img src="logo (2).png" style="width: 120px; height: auto; filter: brightness(0) invert(1);" alt="Logo">\n      </div>\n      <h1 class="brand-title">Rent a Car</h1>\n      <p class="brand-subtitle">Gjoni</p>\n    </div>\n\n    <!-- Karta e hyrjes -->\n    <ion-card class="login-card">\n      <ion-card-content>\n        <p class="login-heading">Hyrja</p>\n\n        <!-- Email -->\n        <ion-item class="input-item" lines="none">\n          <ion-label position="stacked">Username</ion-label>\n          <ion-input\n            type="text"\n            placeholder="p.sh. admin"\n            [(ngModel)]="username"\n            [disabled]="loading"\n            autocomplete="username"\n          ></ion-input>\n        </ion-item>\n\n        <!-- Fjal\xEBkalimi -->\n        <ion-item class="input-item" lines="none">\n          <ion-label position="stacked">Fjal\xEBkalimi</ion-label>\n          <ion-input\n            type="password"\n            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\n            [(ngModel)]="password"\n            [disabled]="loading"\n            autocomplete="current-password"\n          ></ion-input>\n        </ion-item>\n\n        <!-- Gabim -->\n        @if (error) {\n          <div class="error-box">\n            <ion-text color="danger">\n              <p>{{ error }}</p>\n            </ion-text>\n          </div>\n        }\n\n        <!-- Butoni Hyr -->\n        <ion-button\n          expand="block"\n          class="login-btn"\n          (click)="login()"\n          [disabled]="loading || !username || !password"\n        >\n          @if (loading) {\n            <ion-spinner name="crescent"></ion-spinner>\n          } @else {\n            Hyr\n          }\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n</ion-content>\n', styles: ['@charset "UTF-8";\n\n/* src/app/pages/login/login.page.scss */\n.login-content {\n  --background:\n    linear-gradient(\n      160deg,\n      #1a3c5e 0%,\n      #2a5c8e 50%,\n      #1a3c5e 100%);\n}\n.login-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 24px 16px 40px;\n}\n.brand {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.logo-circle {\n  width: 90px;\n  height: 90px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.logo-icon {\n  font-size: 48px;\n  color: #ffffff;\n}\n.brand-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.brand-subtitle {\n  font-size: 18px;\n  color: #f0a500;\n  font-weight: 600;\n  margin: 4px 0 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.login-card {\n  width: 100%;\n  max-width: 420px;\n  margin: 0;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.login-heading {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.input-item {\n  --background: #f4f6f9;\n  --border-radius: 10px;\n  --padding-start: 14px;\n  --inner-padding-end: 14px;\n  margin-bottom: 14px;\n  border-radius: 10px;\n}\n.input-item ion-label {\n  font-weight: 600;\n  color: #333 !important;\n  font-size: 13px !important;\n  margin-bottom: 4px;\n}\n.input-item ion-input {\n  font-size: 17px;\n  --color: #111;\n}\n.error-box {\n  background: #fdecea;\n  border: 1px solid #e74c3c;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n}\n.error-box p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.login-btn {\n  margin-top: 8px;\n  --background: var(--ion-color-primary);\n  --background-activated: var(--ion-color-primary-shade);\n  font-size: 18px;\n  font-weight: 700;\n  height: 52px;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 23 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-5ZELM2LV.js.map
