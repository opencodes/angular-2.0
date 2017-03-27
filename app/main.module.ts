import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

//Common Components
import { AppComponent }  from './main.component';
import { RoutingConfig }  from './main.routing.config';
//Modules
import { DashboardComponent }  from './dashboard/components/dashboard.component';
import { BlogModule }  from './blog/blog.module';
import { LoginComponent }  from './auth/components/login.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, BlogModule, RouterModule.forRoot(RoutingConfig) ],
  declarations: [ AppComponent, DashboardComponent, LoginComponent ,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
    
}
