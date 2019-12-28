import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimacionRapidezPage } from './estimacion-rapidez.page';

const routes: Routes = [
  {
    path: '',
    component: EstimacionRapidezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimacionRapidezPageRoutingModule {}
