import { Component, ChangeDetectorRef } from '@angular/core';
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
  username = '';
  password = '';
  error    = '';
  loading  = false;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ carOutline, lockClosedOutline, personOutline });
  }

  ionViewWillEnter(): void {
    this.username = '';
    this.password = '';
    this.error    = '';
    this.cdr.detectChanges();
  }

  async login(): Promise<void> {
    this.error   = '';
    
    // Validime paraprake (Age 50+)
    if (!this.username.trim()) {
      this.error = 'Ju lutem shkruani emrin e përdoruesit.';
      return;
    }
    if (!this.password.trim()) {
      this.error = 'Ju lutem shkruani fjalëkalimin.';
      return;
    }

    this.loading = true;

    try {
      //timeout 15s
      const loginPromise = this.auth.login(this.username, this.password);
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject({code: 'timeout'}), 15000));

      await Promise.race([loginPromise, timeoutPromise]);
      this.router.navigate(['/cars']);
    } catch (e: any) {
      console.error('Gabim gjatë login (Detaje):', e);
      
      const errCode = e?.code || '';
      const errMsg  = e?.message || '';

      if (errCode === 'timeout') {
        this.error = 'Shërbimi po vonohet shum. Ju lutem kontrolloni internetin dhe provoni përsëri.';
      } else if (errCode.includes('invalid-credential') || 
          errCode.includes('user-not-found') || 
          errCode.includes('wrong-password') ||
          errMsg.includes('INVALID_LOGIN_CREDENTIALS')) {
        this.error = 'Emri i përdoruesit ose fjalëkalimi nuk është i saktë. Ju lutem kontrolloni të dhënat.';
      } else if (errCode.includes('too-many-requests')) {
        this.error = 'Shumë tentativa të dështuara. Ju lutem provoni përsëri pas pak minutash.';
      } else {
        this.error = 'Ndodhi një gabim gjatë identifikimit. Ju lutem provoni përsëri.';
      }
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}
