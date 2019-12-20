import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesinfeccionPageRoutingModule } from './desinfeccion-routing.module';

import { DesinfeccionPage } from './desinfeccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DesinfeccionPageRoutingModule
  ],
  declarations: [DesinfeccionPage]
})
export class DesinfeccionPageModule {}
