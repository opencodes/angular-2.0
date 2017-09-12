import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';

const RoutingConfig: Routes = [
  { path: 'playbook',   component:MainComponent },
  { path: 'playbook/id/:id',   component:MainComponent },
  { path: 'right', outlet:"rightrails",  component: RightComponent },  
  { path: 'right/id/:id', outlet:"rightrails",  component: RightComponent },  

];
export { RoutingConfig };