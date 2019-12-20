import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaudalPage } from './caudal.page';

const routes: Routes = [
  {
    path: '',
    component: CaudalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaudalPageRoutingModule {}
