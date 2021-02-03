
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JasperoConfirmationsModule } from '@jaspero/ng2-confirmations';


@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JasperoConfirmationsModule,
    ToastrModule.forRoot({
      // timeOut: 10000,
      preventDuplicates: true
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
