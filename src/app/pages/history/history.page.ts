import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonBackButton, IonCard, IonCardContent, IonIcon,
  IonAlert, AlertController,
  IonButton, IonBadge, IonSkeletonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline, calendarOutline, cashOutline, carOutline,
  trashOutline, createOutline, refreshOutline
} from 'ionicons/icons';
import { DataService } from '../../services/data.service';
import { Reservation } from '../../models/reservation.model';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    AsyncPipe, CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonBackButton, IonCard, IonCardContent, IonIcon,
    IonAlert, IonButton, IonBadge, IonSkeletonText
  ],
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  car: Car | undefined;
  reservations$!: Observable<Reservation[]>;
  loading = false;

  deleteAlertOpen = false;
  resToDelete: Reservation | null = null;
  deleteAlertButtons: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private data: DataService,
    private cdr: ChangeDetectorRef,
    private alertCtrl: AlertController
  ) {
    addIcons({ 
      personOutline, calendarOutline, cashOutline, carOutline,
      trashOutline, createOutline, refreshOutline
    });
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id') ?? '';
    this.data.getCarById$(carId).subscribe(c => {
      this.car = c;
      this.cdr.detectChanges();
    });
    
    this.loading = true;
    this.reservations$ = this.data.getReservationsForCar$(carId);
    
    this.reservations$.subscribe({
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

  formatDate(iso: string): string {
    if (!iso) return '—';
    const d = new Date(iso);
    const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
    const pad = (n: number) => n < 10 ? '0' + n : n.toString();
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  getDays(res: Reservation): number {
    if (!res.pricePerDay) return 1;
    return Math.max(1, Math.round(res.totalPrice / res.pricePerDay));
  }

  editReservation(res: Reservation): void {
    // Navigojmë te faqja e rezervimit me carId dhe resId
    this.router.navigate(['/cars', res.carId, 'reserve', res.id]);
  }

  promptDelete(res: Reservation): void {
    this.resToDelete = res;
    this.deleteAlertButtons = [
      {
        text: 'Anulo',
        role: 'cancel',
        handler: () => { this.resToDelete = null; }
      },
      {
        text: 'Po, Fshi',
        role: 'destructive',
        handler: async () => {
          if (this.resToDelete) {
            await this.data.deleteReservation(this.resToDelete.id);
            this.resToDelete = null;
          }
        }
      }
    ];
    this.deleteAlertOpen = true;
    this.cdr.detectChanges();
  }

  async reactivateCar(): Promise<void> {
    if (!this.car) return;

    const alert = await this.alertCtrl.create({
      header: 'Aktivizo Makinën',
      message: `A jeni i sigurt që doni ta ktheni ${this.car.model} në aktive?`,
      buttons: [
        {
          text: 'Anulo',
          role: 'cancel'
        },
        {
          text: 'Po, Aktivizo',
          role: 'confirm',
          handler: async () => {
            if (this.car) {
              await this.data.activateCar(this.car.id);
              // car status will update via the subscription in ngOnInit
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
