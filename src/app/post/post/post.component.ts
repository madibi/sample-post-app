import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Post} from "@commons/schema/post/entities/post.entity";
import {selectPost} from "@commons/store/post/post.selector";
import {Store} from "@ngrx/store";
import {PostState} from "@commons/store/post/post.state";
import {ActivatedRoute} from "@angular/router";
import * as POST_ACTIONS from "@commons/store/post/post.action";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post$: Observable<Post> = null!

  constructor(
    private postState: Store<PostState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.post$ = this.postState.select(selectPost);
  }

  ngOnInit(): void {
    this.post$.pipe(take(1)).subscribe((post) => {
      if (!post) {
        this.activatedRoute.params.subscribe(params => {
          this.postState.dispatch(
            POST_ACTIONS.getPost({ postId : params['id']})
          );
        });
      }
    })
  }
}
