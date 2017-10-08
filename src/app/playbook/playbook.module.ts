import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { RoutingConfig } from './playbook-routing';
import { PlaybookService } from './shared/playbook.service';
import {ScrollTo} from './shared/ScrollTo';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RoutingConfig)
  ],
  declarations: [MainComponent, RightComponent, ScrollTo],
})
export class PlaybookModule { }
