import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongodbComponent } from './mongodb.component';

const routes: Routes = [
  {path:'',component:MongodbComponent, data:{title:'MONGODB'}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongodbRoutingModule { }
