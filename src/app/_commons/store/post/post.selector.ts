import {createSelector} from '@ngrx/store';
import {PostState} from '@commons/store/post/post.state';

export const postState = (state: any) => state.post;

export const selectPost = createSelector(
  postState,
  (_postState: PostState) => _postState.post
);

export const selectPosts = createSelector(
  postState,
  (_postState: PostState) => _postState.posts
);
