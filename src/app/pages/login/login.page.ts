import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonCard, IonCardContent, IonItem, IonLabel,
  IonInput, IonButton, IonText, IonSpinner
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, lockClosedOutline, personOutline } from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    IonContent, IonCard, IonCardContent, IonItem, IonLabel,
    IonInput, IonButton, IonText, IonSpinner
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email    = '';
  password = '';
  error    = '';
  loading  = false;

  constructor(private auth: AuthService, private router: Router) {
    addIcons({ carOutline, lockClosedOutline, personOutline });
  }

  async login(): Promise<void> {
    this.error   = '';
    this.loading = true;

    try {
      await this.auth.login(this.email.trim(), this.password);
      this.router.navigate(['/cars']);
    } catch (e: any) {
      console.error('Gabim gjatë login:', e);
      if (e.code === 'auth/invalid-credential' || e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password') {
        this.error = 'Email ose fjalëkalimi është i gabuar.';
      } else if (e.code === 'auth/too-many-requests') {
        this.error = 'Shumë tentativa të dështuara. Ju lutem provoni më vonë.';
      } else {
        this.error = 'Ndodhi një gabim gjatë identifikimit. Provoni përsëri.';
      }
    } finally {
      this.loading = false;
    }
  }
}
