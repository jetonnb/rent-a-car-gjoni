import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Observable, shareReplay, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth   = inject(Auth);
  private router = inject(Router);

  /** Single shared source — avoids multiple subscriptions to authState */
  private _state$: Observable<User | null> = authState(this.auth).pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Emits true when a user is signed in */
  isLoggedIn$: Observable<boolean> = this._state$.pipe(map(user => !!user));

  get currentUser(): User | null {
    // Synchronous check via the cached subject value isn't guaranteed;
    // use isLoggedIn$ / currentUser$ in async contexts where possible.
    return (this.auth as any).currentUser ?? null;
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  /** Sign in — accepts plain username (appends @gjoni.com) or full email */
  async login(usernameOrEmail: string, password: string): Promise<void> {
    const email = usernameOrEmail.trim().includes('@')
      ? usernameOrEmail.trim()
      : `${usernameOrEmail.trim()}@gjoni.com`;
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
