import { createAction, props } from '@ngrx/store';
import {AppTheme} from '@commons/schema/app/enum/app-theme.enum';

export const resetState = createAction(
  '[APP] Reset State'
);

export const updateAppTheme = createAction(
  '[APP] Update App Theme',
  props<{appTheme: AppTheme}>()
);
