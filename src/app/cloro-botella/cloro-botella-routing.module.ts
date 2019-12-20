import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloroBotellaPage } from './cloro-botella.page';

const routes: Routes = [
  {
    path: '',
    component: CloroBotellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloroBotellaPageRoutingModule {}
