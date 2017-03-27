import { RouterModule, Routes } from '@angular/router';

import { BlogComponent }  from './components/blog.component';

const BlogRouting: Routes = [
  { path: 'blog',   component:BlogComponent },
  { path: 'blog/post',   component:BlogComponent }
];
export { BlogRouting };