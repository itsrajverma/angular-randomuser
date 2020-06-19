import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Font Awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// ngx-toastr
import { ToastrModule } from "ngx-toastr";
import  { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from './card/card.component';

// http module for api call

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
