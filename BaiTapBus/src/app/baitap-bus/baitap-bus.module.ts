import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapBusComponent } from './baitap-bus.component';
import { DanhsachGheComponent } from './danhsach-ghe/danhsach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';



@NgModule({
  declarations: [BaitapBusComponent, DanhsachGheComponent, ItemGheComponent],
  exports: [BaitapBusComponent, DanhsachGheComponent, ItemGheComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapBusModule { }
