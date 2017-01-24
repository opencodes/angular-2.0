import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './main.component';
import { RoutingConfig }  from './main.routing.config';
import { LoginComponent }  from './auth/components/login.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(RoutingConfig) ],
  declarations: [ AppComponent, LoginComponent ,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
