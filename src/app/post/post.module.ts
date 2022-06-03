import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import {PostRoutingModule} from "@app/post/post-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
    imports: [
        CommonModule,
        PostRoutingModule,
        FormsModule
    ]
})
export class PostModule { }
