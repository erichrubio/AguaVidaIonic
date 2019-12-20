import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoAutoPage } from './peso-auto.page';

const routes: Routes = [
  {
    path: '',
    component: PesoAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoAutoPageRoutingModule {}
