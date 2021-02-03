import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../componets/footer/footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent, RouterModule]
})
export class FooterModule {
}
