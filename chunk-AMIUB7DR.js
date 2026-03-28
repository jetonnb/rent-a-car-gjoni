import {
  Auth,
  Injectable,
  Router,
  authState,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  signInWithEmailAndPassword,
  signOut,
  ɵɵdefineInjectable
} from "./chunk-MT4FHGR7.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  auth = inject(Auth);
  router = inject(Router);
  /** Single shared source — avoids multiple subscriptions to authState */
  _state$ = authState(this.auth).pipe(shareReplay({ bufferSize: 1, refCount: true }));
  /** Emits true when a user is signed in */
  isLoggedIn$ = this._state$.pipe(map((user) => !!user));
  get currentUser() {
    return this.auth.currentUser ?? null;
  }
  get isLoggedIn() {
    return !!this.currentUser;
  }
  /** Sign in — accepts plain username (appends @gjoni.com) or full email */
  async login(usernameOrEmail, password) {
    const email = usernameOrEmail.trim().includes("@") ? usernameOrEmail.trim() : `${usernameOrEmail.trim()}@gjoni.com`;
    await signInWithEmailAndPassword(this.auth, email, password);
  }
  async logout() {
    await signOut(this.auth);
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-AMIUB7DR.js.map
