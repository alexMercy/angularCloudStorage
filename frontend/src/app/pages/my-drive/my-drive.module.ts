import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDriveRoutingModule } from './my-drive-routing.module';
import {MyDriveComponent} from "./my-drive.component";


@NgModule({
  declarations: [MyDriveComponent],
  imports: [
    CommonModule,
    MyDriveRoutingModule
  ]
})
export class MyDriveModule { }
