import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaudalPageRoutingModule } from './caudal-routing.module';

import { CaudalPage } from './caudal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CaudalPageRoutingModule
  ],
  declarations: [CaudalPage]
})
export class CaudalPageModule {}
