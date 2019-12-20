import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoGoteosPageRoutingModule } from './peso-goteos-routing.module';

import { PesoGoteosPage } from './peso-goteos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PesoGoteosPageRoutingModule
  ],
  declarations: [PesoGoteosPage]
})
export class PesoGoteosPageModule {}
