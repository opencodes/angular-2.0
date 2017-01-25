import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './main.component';
import { LoginComponent }  from './auth/components/login.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';

const RoutingConfig: Routes = [
  { path: 'home', pathMatch: 'full', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
export { RoutingConfig };