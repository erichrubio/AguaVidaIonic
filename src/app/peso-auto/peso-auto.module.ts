import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoAutoPageRoutingModule } from './peso-auto-routing.module';

import { PesoAutoPage } from './peso-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PesoAutoPageRoutingModule
  ],
  declarations: [PesoAutoPage]
})
export class PesoAutoPageModule {}
