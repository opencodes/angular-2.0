import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }  from './components/profile.component';

const Routing: Routes = [
  { path: 'profile',   component:ProfileComponent },
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(Routing)  
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
