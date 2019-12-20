import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolucionMadrePage } from './solucion-madre.page';

const routes: Routes = [
  {
    path: '',
    component: SolucionMadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolucionMadrePageRoutingModule {}
