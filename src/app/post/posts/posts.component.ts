import { Component, OnInit } from '@angular/core';
import * as POST_ACTIONS from "@commons/store/post/post.action";
import {Store} from "@ngrx/store";
import {PostState} from "@commons/store/post/post.state";
import {Observable} from "rxjs";
import {Post} from "@commons/schema/post/entities/post.entity";
import {selectPosts} from "@commons/store/post/post.selector";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts$: Observable<Post[]> = null!

  constructor(
    private postState: Store<PostState>,
  ) {
    this.posts$ = this.postState.select(selectPosts);
  }

  ngOnInit(): void {
    this.postState.dispatch(
      POST_ACTIONS.getPosts()
    );
  }
}
