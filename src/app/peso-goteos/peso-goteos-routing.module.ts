import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoGoteosPage } from './peso-goteos.page';

const routes: Routes = [
  {
    path: '',
    component: PesoGoteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoGoteosPageRoutingModule {}
