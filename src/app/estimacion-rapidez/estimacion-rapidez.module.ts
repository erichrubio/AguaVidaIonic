import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimacionRapidezPageRoutingModule } from './estimacion-rapidez-routing.module';

import { EstimacionRapidezPage } from './estimacion-rapidez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EstimacionRapidezPageRoutingModule
  ],
  declarations: [EstimacionRapidezPage]
})
export class EstimacionRapidezPageModule {}
