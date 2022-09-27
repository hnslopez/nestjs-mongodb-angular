import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
  { path:  'about',  loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path:  'angular',  loadChildren: () => import('./features/angular/angular.module').then(m => m.AngularModule) },
  { path:  'nestjs',  loadChildren: () => import('./features/nestjs/nestjs.module').then(m => m.NestjsModule) },
  { path:  'mongodb',  loadChildren: () => import('./features/mongodb/mongodb.module').then(m => m.MongodbModule) },

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
