import {Action, createReducer, on} from '@ngrx/store';
import { AppState } from '@commons/store/app/app.state';
import { initialAppState } from './initial-app.state';
import * as App_Actions from './app.action';

const reducer = createReducer(
  initialAppState,

  on(App_Actions.resetState, (state: AppState) => ({ ...state, ...{initialAppState} })),

  on(App_Actions.updateAppTheme, (state: AppState, {appTheme}) =>
    ({ ...state,
      appTheme
    })
  ),
);

export const appReducer = (state: AppState | undefined, action: Action) =>
  reducer(state, action);

