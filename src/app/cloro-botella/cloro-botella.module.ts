import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloroBotellaPageRoutingModule } from './cloro-botella-routing.module';

import { CloroBotellaPage } from './cloro-botella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CloroBotellaPageRoutingModule
  ],
  declarations: [CloroBotellaPage]
})
export class CloroBotellaPageModule {}
