import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModCompComponent } from './mod-comp/mod-comp.component';



@NgModule({
  declarations: [
    ModCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModCompComponent
  ]
})
export class MyModuleModule { }
