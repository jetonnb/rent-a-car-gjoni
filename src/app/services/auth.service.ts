import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  /** Observable që tregon nëse përdoruesi është i kyçur */
  isLoggedIn$: Observable<boolean> = authState(this.auth).pipe(
    map((user: User | null) => !!user)
  );

  private _currentUser: User | null = null;

  constructor() {
    // Monitorojmë gjendjen e kyçjes
    authState(this.auth).subscribe(user => {
      this._currentUser = user;
    });
  }

  get isLoggedIn(): boolean {
    return !!this._currentUser;
  }

  /** Kyçja asinkrone me username ose email */
  async login(usernameOrEmail: string, password: string): Promise<void> {
    let email = usernameOrEmail.trim();
    if (!email.includes('@')) {
      email = `${email}@gjoni.com`;
    }
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  /** Çkyçja nga Firebase */
  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
