import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

//Common Components
import { AppComponent }  from './main.component';
import { RoutingConfig }  from './main.routing.config';
//Modules
import { BlogModule }  from './blog/blog.module';
import { AuthModule }  from './auth/auth.module';
//Components
import { DashboardComponent }  from './dashboard/components/dashboard.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule,  RouterModule.forRoot(RoutingConfig), AuthModule, BlogModule  ],
  declarations: [ AppComponent, DashboardComponent ,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
    
}
