import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {exhaustMap, map} from 'rxjs/operators';
import {Response} from '@commons/schema/common/models/classes/response.class';
import {Router} from '@angular/router';
import * as POST_ACTIONS from '@commons/store/post/post.action';
import {PostService} from "@commons/store/post/post.service";
import {Post} from "@commons/schema/post/entities/post.entity";
import {Store} from "@ngrx/store";
import {PostState} from "@commons/store/post/post.state";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class PostEffects {

  getPost$ = createEffect(() => this.actions.pipe(ofType(POST_ACTIONS.getPost),
    exhaustMap((props) => this.postService.getPost(props.postId)
      .pipe(map((res: Response<Post>) => {
        if (res.header.methodInfo.status) {
          this.router.navigateByUrl('/posts/' + props.postId).then();
          return POST_ACTIONS.updatePost({
            post: res.body
          });
        } else {
          this.toastrService.error('something went wrong!');
          return POST_ACTIONS.updatePost({
            post: undefined!
          });
        }
      })))
  ));

  getPosts$ = createEffect(() => this.actions.pipe(ofType(POST_ACTIONS.getPosts),
    exhaustMap((props) => this.postService.getPosts()
      .pipe(map((res: Response<Post[]>) => {
        if (res.header.methodInfo.status) {
          return POST_ACTIONS.updatePosts({
            posts: res.body
          });
        } else {
          this.toastrService.error('something went wrong!');
          return POST_ACTIONS.updatePosts({
            posts: undefined!
          });
        }
      })))
  ));

  constructor(
    private actions: Actions,
    public postService: PostService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

}
