import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolucionMadrePageRoutingModule } from './solucion-madre-routing.module';

import { SolucionMadrePage } from './solucion-madre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SolucionMadrePageRoutingModule
  ],
  declarations: [SolucionMadrePage]
})
export class SolucionMadrePageModule {}
