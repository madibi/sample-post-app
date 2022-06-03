import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "@app/post/posts/posts.component";
import {PostComponent} from "@app/post/post/post.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
