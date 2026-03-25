import { Injectable, inject } from '@angular/core';
import { 
  ToastController, 
  AlertController, 
  LoadingController 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  checkmarkCircleOutline, 
  warningOutline, 
  alertCircleOutline,
  informationCircleOutline 
} from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private toastCtrl = inject(ToastController);
  private alertCtrl = inject(AlertController);
  private loadingCtrl = inject(LoadingController);

  constructor() {
    addIcons({ 
      checkmarkCircleOutline, 
      warningOutline, 
      alertCircleOutline,
      informationCircleOutline 
    });
  }

  /**
   * Shfaq një njoftim suksesi (Gjelbër)
   * @param message Mesazhi që do të shfaqet
   */
  async showSuccess(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast-success',
      icon: 'checkmark-circle-outline',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  /**
   * Shfaq një njoftim gabimi (I Kuq)
   * @param message Mesazhi që do të shfaqet (Instruksional)
   */
  async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'bottom',
      cssClass: 'toast-error',
      icon: 'warning-outline',
      buttons: [
        {
          text: 'Kuptova',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  /**
   * Shfaq një paralajmërim (Portokalli/Amber)
   * @param message Mesazhi që do të shfaqet
   */
  async showWarning(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom',
      cssClass: 'toast-warning',
      icon: 'alert-circle-outline',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  /**
   * Kërkon konfirmim për një veprim madhor
   * @param header Titulli i dialogut
   * @param message Mesazhi sqarues
   * @returns Promise<boolean> true nëse përdoruesi pranon
   */
  async confirm(header: string, message: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header: header,
        message: message,
        cssClass: 'custom-alert',
        buttons: [
          {
            text: 'Anulo',
            role: 'cancel',
            cssClass: 'alert-button-cancel',
            handler: () => resolve(false)
          },
          {
            text: 'Po, Jam i Sigurt',
            role: 'confirm',
            cssClass: 'alert-button-confirm',
            handler: () => resolve(true)
          }
        ]
      });

      await alert.present();
    });
  }

  /**
   * Shfaq një spinner ngarkimi me tekst
   * @param message Teksti instruksional
   */
  async showLoading(message: string = 'Duke përpunuar të dhënat...') {
    const loading = await this.loadingCtrl.create({
      message: message,
      spinner: 'crescent',
      cssClass: 'custom-loading'
    });
    await loading.present();
    return loading;
  }
}
