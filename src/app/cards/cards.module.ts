import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatCardModule} from '@angular/material/card';
import { CardItemComponent } from './card-item/card-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CardSearchComponent } from './card-search/card-search.component';
import { ManagementComponentsComponent } from './management-components/management-components.component';
import { ProfilComponent } from './management-components/profil-Admin/profil.component';
import { TabloComponent } from './management-components/tablo/tablo.component';
import { AyarlarComponent } from './management-components/ayarlar/ayarlar.component';
import { IcerikComponent } from './management-components/icerik/icerik.component';
import { IstatistikComponent } from './management-components/istatistik/istatistik.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UyelerComponent } from './management-components/uyeler/uyeler.component';
@NgModule({
  declarations: [CardsComponent,
     CardItemComponent,
     CardModalComponent, 
     CardSearchComponent, ManagementComponentsComponent, ProfilComponent, TabloComponent, AyarlarComponent, IcerikComponent, IstatistikComponent, UyelerComponent
     
    ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTabsModule
  ]
})
export class CardsModule { }
