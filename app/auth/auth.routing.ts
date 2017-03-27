import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './components/login.component';
import { SignupComponent }  from './components/signup.component';

const AuthRouting: Routes = [
  { path: 'login',   component:LoginComponent },
  { path: 'signup',   component:SignupComponent }
];
export { AuthRouting };