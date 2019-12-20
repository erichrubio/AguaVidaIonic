import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'caudal',
    loadChildren: () => import('./caudal/caudal.module').then( m => m.CaudalPageModule)
  },
  {
    path: 'peso-goteos',
    loadChildren: () => import('./peso-goteos/peso-goteos.module').then( m => m.PesoGoteosPageModule)
  },
  {
    path: 'peso-auto',
    loadChildren: () => import('./peso-auto/peso-auto.module').then( m => m.PesoAutoPageModule)
  },
  {
    path: 'rapidez-goteos',
    loadChildren: () => import('./rapidez-goteos/rapidez-goteos.module').then( m => m.RapidezGoteosPageModule)
  },
  {
    path: 'rapidez-auto',
    loadChildren: () => import('./rapidez-auto/rapidez-auto.module').then( m => m.RapidezAutoPageModule)
  },
  {
    path: 'solucion-madre',
    loadChildren: () => import('./solucion-madre/solucion-madre.module').then( m => m.SolucionMadrePageModule)
  },
  {
    path: 'desinfeccion',
    loadChildren: () => import('./desinfeccion/desinfeccion.module').then( m => m.DesinfeccionPageModule)
  },
  {
    path: 'vr-cuadrado',
    loadChildren: () => import('./vr-cuadrado/vr-cuadrado.module').then( m => m.VrCuadradoPageModule)
  },
  {
    path: 'vr-cilindro',
    loadChildren: () => import('./vr-cilindro/vr-cilindro.module').then( m => m.VrCilindroPageModule)
  },
  {
    path: 'cloro-botella',
    loadChildren: () => import('./cloro-botella/cloro-botella.module').then( m => m.CloroBotellaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
