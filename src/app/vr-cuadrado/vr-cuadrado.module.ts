import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VrCuadradoPageRoutingModule } from './vr-cuadrado-routing.module';

import { VrCuadradoPage } from './vr-cuadrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VrCuadradoPageRoutingModule
  ],
  declarations: [VrCuadradoPage]
})
export class VrCuadradoPageModule {}
