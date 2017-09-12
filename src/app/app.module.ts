import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaybookModule } from './playbook/playbook.module';
import { PlaybookService } from './playbook/shared/playbook.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlaybookModule,
    RouterModule.forRoot([
      {
        path: "", component: HomeComponent, pathMatch: "full"
      }
    ])
  ],
  providers: [PlaybookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
