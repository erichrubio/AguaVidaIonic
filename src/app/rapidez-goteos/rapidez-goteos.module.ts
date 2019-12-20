import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapidezGoteosPageRoutingModule } from './rapidez-goteos-routing.module';

import { RapidezGoteosPage } from './rapidez-goteos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RapidezGoteosPageRoutingModule
  ],
  declarations: [RapidezGoteosPage]
})
export class RapidezGoteosPageModule {}
