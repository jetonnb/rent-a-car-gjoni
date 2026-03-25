import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonBackButton, IonButton, IonIcon, IonItem, IonLabel,
  IonInput, IonDatetime, IonModal, IonSpinner
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { saveOutline, calendarOutline, warningOutline, carOutline } from 'ionicons/icons';
import { DataService } from '../../services/data.service';
import { UiService } from '../../services/ui.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    FormsModule, CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonBackButton, IonButton, IonIcon, IonItem, IonLabel,
    IonInput, IonDatetime, IonModal, IonSpinner
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
  validationMsg   = '';
  saving          = false;
  checkingAvailability = false;
  initializing    = true;  // suppress validation messages on load

  // Modalet e datetime
  startModalOpen = false;
  endModalOpen   = false;

  closeStartModal() {
    this.startModalOpen = false;
  }

  closeEndModal() {
    this.endModalOpen = false;
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private cdr: ChangeDetectorRef,
    private ui: UiService
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
        this.initializing = false;
        this.cdr.detectChanges();
      } catch (e) {
        console.error('Gabim gjatë inicializimit:', e);
      }
    }
  }

  /** Rillogaritje automatike sa herë ndryshon çdo fushë */
  async recalculate(): Promise<void> {
    this.validationMsg = '';
    
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).getTime();
      const end   = new Date(this.endDate).getTime();

      if (end <= start) {
        this.totalPrice      = 0;
        this.diffDays        = 0;
        this.isAvailable     = false;
        this.validationMsg   = 'Data e kthimit duhet të jetë pas datës së marrjes.';
        return;
      }

      // Minimum 1 orë rezervim
      if (end - start < 1000 * 60 * 60) {
        this.totalPrice      = 0;
        this.diffDays        = 0;
        this.isAvailable     = false;
        this.validationMsg   = 'Rezervimi duhet të jetë të paktën 1 orë.';
        return;
      }

      const diffMs = end - start;
      const dDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      this.diffDays = Math.max(1, dDays);

      this.totalPrice = DataService.calcTotalPrice(this.startDate, this.endDate, this.pricePerDay || 0);

      // Kontrollim disponueshmërie asinkron
      this.checkingAvailability = true;
      try {
        const avail = await this.data.checkAvailability(this.carId, this.startDate, this.endDate, this.resId);
        this.isAvailable = avail;
        
        if (!this.isAvailable && !this.initializing) {
          this.validationMsg = 'Disa nga këto data janë të zëna nga një rezervim tjetër. Ju lutem shikoni historin dhe provoni një periudhë tjetër.';
        }
      } catch (e) {
        this.isAvailable = false;
        this.validationMsg = 'Ndodhi një gabim gjatë kontrollit të disponueshmërisë.';
      } finally {
        this.checkingAvailability = false;
        this.cdr.detectChanges();
      }
    }
  }

  onStartDateChange(event: any): void {
    const raw = event?.detail?.value;
    if (raw) {
      const newValue = typeof raw === 'string' ? raw.substring(0, 16) : raw;
      if (newValue !== this.startDate) {
        this.startDate = newValue;
        this.recalculate();
      }
    }
  }

  onEndDateChange(event: any): void {
    const raw = event?.detail?.value;
    if (raw) {
      const newValue = typeof raw === 'string' ? raw.substring(0, 16) : raw;
      if (newValue !== this.endDate) {
        this.endDate = newValue;
        this.recalculate();
      }
    }
  }

  get canSave(): boolean {
    return (
      this.clientName.trim().length > 0 &&
      !!this.startDate &&
      !!this.endDate &&
      this.totalPrice > 0 &&
      this.isAvailable &&
      !this.saving &&
      !this.checkingAvailability
    );
  }

  async save(): Promise<void> {
    // Validim manual për feedback më të mirë (Age 50+)
    if (!this.clientName.trim()) {
      this.ui.showError('Ju lutem shkruani emrin e klientit për të vazhduar.');
      return;
    }
    
    if (!this.pricePerDay || this.pricePerDay <= 0) {
      this.ui.showError('Ju lutem shkruani çmimin për ditë (p.sh. 30).');
      return;
    }

    if (!this.isAvailable) {
      this.ui.showError(this.validationMsg || 'Kjo makinë nuk është e lirë për datat e zgjedhura.');
      return;
    }

    const loader = await this.ui.showLoading(this.resId ? 'Duke përditësuar rezervimin...' : 'Duke ruajtur rezervimin...');
    this.saving = true;
    
    try {
      const payload = {
        carId:      this.carId,
        clientName: this.clientName.trim(),
        startDate:  this.startDate,
        endDate:    this.endDate,
        pricePerDay: this.pricePerDay || 0,
      };

      if (this.resId) {
        await this.data.updateReservation(this.resId, payload);
      } else {
        await this.data.addReservation(payload);
      }
      
      await this.ui.showSuccess('Rezervimi u ruajt me sukses!');
      this.router.navigate(['/cars', this.carId, 'history'], { replaceUrl: true });
    } catch (e: any) {
      this.ui.showError(e.message || 'Ndodhi një gabim gjatë ruajtjes. Ju lutem kontrolloni të dhënat.');
      this.isAvailable = false;
    } finally {
      this.saving = false;
      loader.dismiss();
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
