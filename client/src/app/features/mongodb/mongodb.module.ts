import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongodbRoutingModule } from './mongodb-routing.module';
import { MongodbComponent } from './mongodb.component';


@NgModule({
  declarations: [
    MongodbComponent
  ],
  imports: [
    CommonModule,
    MongodbRoutingModule
  ]
})
export class MongodbModule { }
