import { createAction, props } from '@ngrx/store';
import {Post} from "@commons/schema/post/entities/post.entity";

export const resetState = createAction(
  '[POST] Reset State'
);

export const updateMessage = createAction(
  '[POST] Update Message',
  props<{ message: string }>()
);

export const getPost = createAction(
  '[POST] Get Post',
  props<{ postId: number }>()
);

export const updatePost = createAction(
  '[POST] Update Post',
  props<{ post: Post }>()
);

export const getPosts = createAction(
  '[POST] Get Posts',
);

export const updatePosts = createAction(
  '[POST] Update Posts',
  props<{ posts: Post[] }>()
);
