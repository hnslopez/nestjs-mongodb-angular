import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },

  {
    path: '**',
    redirectTo: 'home',
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes,
     {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
