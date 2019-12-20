import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VrCilindroPage } from './vr-cilindro.page';

const routes: Routes = [
  {
    path: '',
    component: VrCilindroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VrCilindroPageRoutingModule {}
