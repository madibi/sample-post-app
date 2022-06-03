import {Inject, Injectable} from '@angular/core';
import {AppTheme} from '@commons/schema/app/enum/app-theme.enum';
import * as APP_ACTIONS from '@commons/store/app/app.action';
import {selectAppTheme} from '@commons/store/app/app.selector';
import {Store} from '@ngrx/store';
import {AppState} from '@commons/store/app/app.state';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  isLight: boolean = null!;
  isDark: boolean = null!;

  defaultVariables: any = {
    // radius
    // radius: '6px',
  };

  defaultThemeLight: any = {
    // bg
    pageBackground: '#ffffff',

    // general
    foregroundColorMain: '#6c6c6c',
    backgroundColorMain: '#ffffff',
    alternativeColor: '#d96703',
  };

  defaultThemeDark: any = {
    // bg
    pageBackground: '#363636',

    // general
    foregroundColorMain: '#ababab',
    backgroundColorMain: '#363636',
    alternativeColor: '#d96703',
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appState: Store<AppState>,
  ) {
    appState.select(selectAppTheme).subscribe((appTheme) => {
      this.isLight = appTheme === AppTheme.LIGHT;
      this.isDark = appTheme === AppTheme.DARK;
      if (this.isLight) {
        this.changeThemeToLight();
      } else {
        this.changeThemeToDark();
      };
    });
  }

  initAppTheme(appTheme: AppTheme) {
    this.initVariables();
    if (appTheme === AppTheme.LIGHT) {
      this.changeThemeToLight();
    } else {
      this.changeThemeToDark();
    };
  }

  toggleAppTheme() {
    if (this.isLight) {
      this.changeThemeToDark();
    } else {
      this.changeThemeToLight();
    };
  }

  initVariables() {
    for (const key of Object.keys(this.defaultVariables)) {
      if (this.defaultVariables.hasOwnProperty(key)) {
        document.documentElement.style.setProperty(`--${key}`, this.defaultVariables[key]);
      }
    };
  }

  changeThemeToLight() {
    this.isLight = true;
    this.isDark = false;
    for (const key of Object.keys(this.defaultThemeLight)) {
      if (this.defaultThemeLight.hasOwnProperty(key)) {
        document.documentElement.style.setProperty(`--${key}`, this.defaultThemeLight[key]);
      }
    };
    this.document.body.classList.remove('app-dark');
    this.document.body.classList.add('app-light');
    this.appState.dispatch(APP_ACTIONS.updateAppTheme({
      appTheme: AppTheme.LIGHT
    }));
  }

  changeThemeToDark() {
    this.isLight = false;
    this.isDark = true;
    for (const key of Object.keys(this.defaultThemeDark)) {
      if (this.defaultThemeDark.hasOwnProperty(key)) {
        document.documentElement.style.setProperty(`--${key}`, this.defaultThemeDark[key]);
      }
    };
    this.document.body.classList.remove('app-light');
    this.document.body.classList.add('app-dark');
    this.appState.dispatch(APP_ACTIONS.updateAppTheme({
      appTheme: AppTheme.DARK
    }));
  }
}
