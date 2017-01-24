import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './main.component';
import { LoginComponent }  from './auth/components/login.component';
import { PageNotFoundComponent }  from './common/components/page.not.found.component';

const RoutingConfig: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
export {RoutingConfig};