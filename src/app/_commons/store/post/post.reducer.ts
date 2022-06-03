import {Action, createReducer, on} from '@ngrx/store';
import * as POST_ACTIONS from '@commons/store/post/post.action';
import {initialPostState} from '@commons/store/post/initial-post.state';
import {PostState} from "@commons/store/post/post.state";

const reducer = createReducer(
  initialPostState,

  on(POST_ACTIONS.resetState, (state: PostState) => (state = initialPostState)),

  on(POST_ACTIONS.updatePost,
    (state: PostState, { post }) =>
      ({ ...state,
        post ,
      })),


  on(POST_ACTIONS.updatePosts,
    (state: PostState, { posts }) =>
      ({ ...state,
        posts ,
      })),
);

export const postReducer = (state: PostState | undefined, action: Action) =>
  reducer(state, action);

