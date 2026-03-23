import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonFab, IonFabButton, IonList, IonItem,
  IonLabel, IonAlert, IonModal, IonInput,
  AlertController, ModalController, IonSegment, IonSegmentButton, IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline, calendarOutline, timeOutline,
  trashOutline, logOutOutline, carSportOutline, refreshOutline
} from 'ionicons/icons';
import { Car } from '../../models/car.model';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    AsyncPipe, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader,
    IonCardTitle, IonFab, IonFabButton, IonItem,
    IonLabel, IonAlert, IonModal, IonInput, IonSegment, IonSegmentButton, IonBadge
  ],
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  filter: 'active' | 'all' = 'active';
  cars$!: Observable<Car[]>;

  /* Modal shto makinë */
  isAddModalOpen = false;
  newCarModel    = '';

  /* Alert fshirje */
  deleteAlertOpen = false;
  carToDelete: Car | null = null;
  deleteAlertButtons: any[] = [];

  constructor(
    private data: DataService,
    private auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private alertCtrl: AlertController
  ) {
    addIcons({ addOutline, calendarOutline, timeOutline, trashOutline, logOutOutline, carSportOutline, refreshOutline });
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.cars$ = this.filter === 'active' ? this.data.getCars$() : this.data.getAllCars$();
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

  promptDelete(car: Car): void {
    this.carToDelete = car;
    this.deleteAlertButtons = [
      {
        text: 'Anulo',
        role: 'cancel',
        handler: () => { this.carToDelete = null; }
      },
      {
        text: 'Po, Fshi',
        role: 'destructive',
        handler: async () => {
          if (this.carToDelete) {
            await this.data.softDeleteCar(this.carToDelete.id);
            this.carToDelete = null;
          }
        }
      }
    ];
    this.deleteAlertOpen = true;
    this.cdr.detectChanges();
  }

  async reactivateCar(car: Car): Promise<void> {
    await this.data.activateCar(car.id);
  }

  async logout(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Dilni nga llogaria?',
      message: 'A jeni i sigurt që doni të dilni?',
      buttons: [
        {
          text: 'Anulo',
          role: 'cancel'
        },
        {
          text: 'Po, Dil',
          role: 'destructive',
          handler: () => {
            this.auth.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}
