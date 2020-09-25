import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { WaringalertComponent } from './waringalert/waringalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WaringalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
