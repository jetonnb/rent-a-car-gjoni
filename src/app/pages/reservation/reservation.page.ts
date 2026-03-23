import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonBackButton, IonButton, IonIcon, IonItem, IonLabel,
  IonInput, IonDatetime, IonModal
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { saveOutline, calendarOutline, warningOutline, carOutline } from 'ionicons/icons';
import { DataService } from '../../services/data.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    FormsModule, CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonBackButton, IonButton, IonIcon, IonItem, IonLabel,
    IonInput, IonDatetime, IonModal
  ],
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  car: Car | undefined;
  carId = '';
  resId = '';

  // Fushat e formës
  clientName  = '';
  startDate   = '';
  endDate     = '';
  pricePerDay: number | null = null;

  // Llogaritje dhe validim
  totalPrice      = 0;
  diffDays        = 0;
  isAvailable     = true;
  conflictMessage = '';
  saving          = false;

  // Modalet e datetime
  startModalOpen = false;
  endModalOpen   = false;

  closeStartModal(e: any) {
    if (e?.target?.tagName?.toLowerCase() === 'ion-modal') {
      this.startModalOpen = false;
    }
  }

  closeEndModal(e: any) {
    if (e?.target?.tagName?.toLowerCase() === 'ion-modal') {
      this.endModalOpen = false;
    }
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ saveOutline, calendarOutline, warningOutline, carOutline });
  }

  async ngOnInit(): Promise<void> {
    this.carId = this.route.snapshot.paramMap.get('id') ?? '';
    this.resId = this.route.snapshot.paramMap.get('resId') ?? '';
    
    this.data.getCarById$(this.carId).subscribe(c => this.car = c);

    if (this.resId) {
      this.data.getReservationById$(this.resId).subscribe(async res => {
        if (res) {
          this.clientName = res.clientName;
          this.startDate = res.startDate.substring(0, 16);
          this.endDate = res.endDate.substring(0, 16);
          this.pricePerDay = res.pricePerDay;
          await this.recalculate();
          this.cdr.detectChanges();
        }
      });
    } else {
      const pad = (n: number) => n < 10 ? '0' + n : n;
      const toLocalISO = (d: Date) => 
        `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;

      try {
        const freeDate = await this.data.getEarliestFreeDate(this.carId);
        this.startDate = toLocalISO(freeDate);

        const dayAfter = new Date(freeDate);
        dayAfter.setDate(dayAfter.getDate() + 1);
        this.endDate = toLocalISO(dayAfter);

        await this.recalculate();
        this.cdr.detectChanges();
      } catch (e) {
        console.error('Gabim gjatë inicializimit:', e);
      }
    }
  }

  /** Rillogaritje automatike sa herë ndryshon çdo fushë */
  async recalculate(): Promise<void> {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).getTime();
      const end   = new Date(this.endDate).getTime();

      if (end <= start) {
        this.totalPrice      = 0;
        this.diffDays        = 0;
        this.isAvailable     = false;
        this.conflictMessage = 'Data e kthimit duhet të jetë pas datës së marrjes.';
        return;
      }

      const diffMs = end - start;
      const dDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      this.diffDays = Math.max(1, dDays);

      this.totalPrice = DataService.calcTotalPrice(this.startDate, this.endDate, this.pricePerDay || 0);

      // Kontrollim disponueshmërie asinkron
      try {
        const avail = await this.data.checkAvailability(this.carId, this.startDate, this.endDate, this.resId);
        this.isAvailable = avail;
        this.conflictMessage = avail
          ? ''
          : 'Kjo makinë është e rezervuar në këto data. Ju lutem zgjidhni data të tjera.';
      } catch (e) {
        this.isAvailable = false;
        this.conflictMessage = 'Gabim gjatë kontrollit të disponueshmërisë.';
      }
    }
  }

  onStartDateChange(event: any): void {
    const raw = event?.detail?.value;
    if (raw) {
      this.startDate = typeof raw === 'string' ? raw.substring(0, 16) : raw;
      this.recalculate();
    }
  }

  onEndDateChange(event: any): void {
    const raw = event?.detail?.value;
    if (raw) {
      this.endDate = typeof raw === 'string' ? raw.substring(0, 16) : raw;
      this.recalculate();
    }
  }

  get canSave(): boolean {
    return (
      this.clientName.trim().length > 0 &&
      !!this.startDate &&
      !!this.endDate &&
      this.totalPrice > 0 &&
      this.isAvailable &&
      !this.saving
    );
  }

  async save(): Promise<void> {
    if (!this.canSave) return;
    this.saving = true;
    try {
      if (this.resId) {
        await this.data.updateReservation(this.resId, {
          carId:      this.carId,
          clientName: this.clientName.trim(),
          startDate:  this.startDate,
          endDate:    this.endDate,
          pricePerDay: this.pricePerDay || 0,
        });
      } else {
        await this.data.addReservation({
          carId:      this.carId,
          clientName: this.clientName.trim(),
          startDate:  this.startDate,
          endDate:    this.endDate,
          pricePerDay: this.pricePerDay || 0,
        });
      }
      this.router.navigate(['/cars', this.carId, 'history']);
    } catch (e: any) {
      this.conflictMessage = e.message;
      this.isAvailable     = false;
    } finally {
      this.saving = false;
    }
  }

  /** Formatim user-friendly i datës */
  formatDate(iso: string): string {
    if (!iso) return '—';
    const d = new Date(iso);
    const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
    const pad = (n: number) => n < 10 ? '0' + n : n.toString();
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
