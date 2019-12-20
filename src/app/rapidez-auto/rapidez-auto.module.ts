import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapidezAutoPageRoutingModule } from './rapidez-auto-routing.module';

import { RapidezAutoPage } from './rapidez-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapidezAutoPageRoutingModule
  ],
  declarations: [RapidezAutoPage]
})
export class RapidezAutoPageModule {}
