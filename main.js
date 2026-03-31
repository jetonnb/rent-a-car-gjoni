import {
  AuthService
} from "./chunk-AMIUB7DR.js";
import {
  getFirestore,
  provideFirestore
} from "./chunk-H22GPG2J.js";
import {
  Component,
  IonApp,
  IonRouterOutlet,
  Router,
  bootstrapApplication,
  getAuth,
  initializeApp,
  inject,
  map,
  provideAuth,
  provideBrowserGlobalErrorListeners,
  provideFirebaseApp,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn$.pipe(take(1), map((isLoggedIn) => {
    if (isLoggedIn) {
      return true;
    }
    return router.createUrlTree(["/login"]);
  }));
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-FODEASH6.js").then((m) => m.LoginPage)
  },
  {
    path: "cars",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-OLZDKYPN.js").then((m) => m.CarsPage)
  },
  {
    path: "cars/:id/reserve",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-VXPGCXNF.js").then((m) => m.ReservationPage)
  },
  {
    path: "cars/:id/reserve/:resId",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-VXPGCXNF.js").then((m) => m.ReservationPage)
  },
  {
    path: "cars/:id/history",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-P7NS6IZZ.js").then((m) => m.HistoryPage)
  },
  { path: "**", redirectTo: "login" }
];

// src/environments/environment.ts
var environment = {
  production: false,
  secure: false,
  firebase: {
    apiKey: "AIzaSyCz5FApQLj-_9D_OSc4DmLDH4WQyvg_9IE",
    authDomain: "rentacargjoni.firebaseapp.com",
    projectId: "rentacargjoni",
    storageBucket: "rentacargjoni.firebasestorage.app",
    messagingSenderId: "859260343672",
    appId: "1:859260343672:web:da865848cb13354b85a48d"
  }
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIonicAngular({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-app");
      \u0275\u0275element(1, "ion-router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [IonApp, IonRouterOutlet],
      template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
