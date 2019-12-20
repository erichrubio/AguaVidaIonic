import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesinfeccionPage } from './desinfeccion.page';

const routes: Routes = [
  {
    path: '',
    component: DesinfeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesinfeccionPageRoutingModule {}
