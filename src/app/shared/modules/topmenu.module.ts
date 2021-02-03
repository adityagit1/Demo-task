import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopmenuComponent } from '../componets/topmenu/topmenu.component';

@NgModule({
  declarations: [TopmenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopmenuComponent, RouterModule]
})
export class TopmenuModule {
}
