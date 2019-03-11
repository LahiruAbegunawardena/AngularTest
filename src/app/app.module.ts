import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewDtaComponent } from './components/view-dta/view-dta.component';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ViewDtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
