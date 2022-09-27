import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestjsRoutingModule } from './nestjs-routing.module';
import { NestjsComponent } from './nestjs.component';


@NgModule({
  declarations: [
    NestjsComponent
  ],
  imports: [
    CommonModule,
    NestjsRoutingModule
  ]
})
export class NestjsModule { }
