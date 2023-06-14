import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDriveRoutingModule } from './my-drive-routing.module';
import {MyDriveComponent} from "./my-drive.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf} from "@angular/cdk/scrolling";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NzListModule} from "ng-zorro-antd/list";
import {NzGridModule} from "ng-zorro-antd/grid";
import { MyDriveCardDirective } from './my-drive.card.directive';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {FileCardComponent} from "../../components/file-card/file-card.component";
import {NzCascaderModule} from "ng-zorro-antd/cascader";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [MyDriveComponent, MyDriveCardDirective, FileCardComponent,],
  exports: [
    MyDriveCardDirective
  ],
  imports: [
    CommonModule,
    MyDriveRoutingModule,
    NzCardModule,
    CdkVirtualForOf,
    CdkFixedSizeVirtualScroll,
    ScrollingModule,
    NzListModule,
    NzGridModule,
    NzDropDownModule,
    NzCascaderModule,
    FormsModule,
  ]
})
export class MyDriveModule { }
