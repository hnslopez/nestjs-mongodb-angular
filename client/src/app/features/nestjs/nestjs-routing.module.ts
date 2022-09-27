import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestjsComponent } from './nestjs.component';

const routes: Routes = [
  {path:'',component:NestjsComponent, data:{title:'NESTJS'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestjsRoutingModule { }
