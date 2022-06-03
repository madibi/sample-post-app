import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { BaseState } from './_base.state';
import {postReducer} from "@commons/store/post/post.reducer";
import {appReducer} from "@commons/store/app/app.reducer";

export const baseReducers: ActionReducerMap<BaseState> = {
  router: routerReducer,
  app: appReducer,
  post: postReducer,
};

export const metaReducers: MetaReducer<BaseState>[] =
  !environment.production ? [storeFreeze] : [];
