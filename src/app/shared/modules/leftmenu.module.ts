import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftmenuComponent} from '../componets/leftmenu/leftmenu.component';
import {RouterModule, Routes} from '@angular/router';



@NgModule({
  declarations: [LeftmenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LeftmenuComponent,RouterModule]
})
export class LeftmenuModule {
}
