import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent }  from './components/blog.component';
import { BlogRouting } from './blog.routing';

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(BlogRouting)  
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
