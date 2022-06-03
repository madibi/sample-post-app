import { createSelector } from '@ngrx/store';
import { AppState } from '@commons/store/app/app.state';

export const appState = (state: any) => state.app;

export const selectAppTheme = createSelector(
  appState,
  (app: AppState) => app.appTheme
);
