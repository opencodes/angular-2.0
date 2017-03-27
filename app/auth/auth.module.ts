import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './components/login.component';
import { SignupComponent }  from './components/signup.component';
import { AuthRouting } from './auth.routing'
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(AuthRouting)  
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
