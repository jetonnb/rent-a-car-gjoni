import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonContent, IonButtons,
  IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonFab, IonFabButton, IonItem,
  IonLabel, IonModal, IonInput,
  ModalController, IonSegment, IonSegmentButton, IonBadge, IonSkeletonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline, calendarOutline, timeOutline,
  trashOutline, logOutOutline, carSportOutline, refreshOutline
} from 'ionicons/icons';
import { Car } from '../../models/car.model';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    AsyncPipe, FormsModule,
    IonHeader, IonToolbar, IonContent, IonButtons,
    IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader,
    IonCardTitle, IonFab, IonFabButton, IonItem,
    IonLabel, IonModal, IonInput, IonSegment, IonSegmentButton, IonBadge,
    IonSkeletonText
  ],
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit, OnDestroy {
  filter: 'active' | 'all' = 'active';
  cars$!: Observable<Car[]>;
  loading = false;
  private _sub?: Subscription;

  /* Modal shto makinë */
  isAddModalOpen = false;
  newCarModel    = '';

  /* Modal shto makinë */

  constructor(
    private data: DataService,
    private auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ui: UiService
  ) {
    addIcons({ addOutline, calendarOutline, timeOutline, trashOutline, logOutOutline, carSportOutline, refreshOutline });
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading = true;
    this.cars$ = this.filter === 'active' ? this.data.getCars$() : this.data.getAllCars$();

    // Stop the loading spinner on first emission
    this._sub?.unsubscribe();
    this._sub = this.cars$.subscribe({
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

  ngOnDestroy(): void {
    this._sub?.unsubscribe();
  }

  filterChanged(): void {
    this.loadCars();
  }

  openAddModal(): void {
    this.newCarModel    = '';
    this.isAddModalOpen = true;
    this.cdr.detectChanges();
  }

  async confirmAddCar(): Promise<void> {
    if (this.newCarModel.trim()) {
      await this.data.addCar(this.newCarModel.trim());
    }
    this.isAddModalOpen = false;
    this.cdr.detectChanges();
  }

  cancelAdd(): void {
    this.isAddModalOpen = false;
    this.cdr.detectChanges();
  }

  goReserve(car: Car): void {
    this.router.navigate(['/cars', car.id, 'reserve']);
  }

  goHistory(car: Car): void {
    this.router.navigate(['/cars', car.id, 'history']);
  }

  async promptDelete(car: Car): Promise<void> {
    const confirm = await this.ui.confirm(
      'Çaktivizo Makinën',
      `A jeni i sigurt që doni të çaktivizoni ${car.model}? Ajo nuk do të jet me e disponueshme per rezervim.`
    );

    if (confirm) {
      const loader = await this.ui.showLoading('Duke çaktivizuar makinën...');
      try {
        await this.data.softDeleteCar(car.id);
        await this.ui.showSuccess('Makina u çaktivizua me sukses.');
      } catch (e) {
        await this.ui.showError('Ndodhi një gabim. Ju lutem provoni përsëri.');
      } finally {
        loader.dismiss();
      }
    }
  }

  async reactivateCar(car: Car): Promise<void> {
    const loader = await this.ui.showLoading('Duke aktivizuar makinën...');
    try {
      await this.data.activateCar(car.id);
      await this.ui.showSuccess('Makina u aktivizua me sukses.');
    } catch (e) {
      await this.ui.showError('Ndodhi një gabim gjatë aktivizimit.');
    } finally {
      loader.dismiss();
    }
  }

  async logout(): Promise<void> {
    const confirm = await this.ui.confirm(
      'Dilni nga llogaria?',
      'A jeni i sigurt që doni të dilni nga aplikacioni?'
    );

    if (confirm) {
      this.auth.logout();
    }
  }
}
