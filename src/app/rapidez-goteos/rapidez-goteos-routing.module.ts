import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapidezGoteosPage } from './rapidez-goteos.page';

const routes: Routes = [
  {
    path: '',
    component: RapidezGoteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapidezGoteosPageRoutingModule {}
