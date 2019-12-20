import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VrCilindroPageRoutingModule } from './vr-cilindro-routing.module';

import { VrCilindroPage } from './vr-cilindro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VrCilindroPageRoutingModule
  ],
  declarations: [VrCilindroPage]
})
export class VrCilindroPageModule {}
