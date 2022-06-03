import {Component, Input, OnInit} from '@angular/core';
import {AppTheme} from '@commons/schema/app/enum/app-theme.enum';
import {AppConfigService} from '@commons/services/app-config.service';
import {Store} from '@ngrx/store';
import {AppState} from '@commons/store/app/app.state';
import {selectAppTheme} from '@commons/store/app/app.selector';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  isLight: boolean = null!;
  isDark: boolean = null!;

  constructor(
    private appConfigService: AppConfigService,
    private appState: Store<AppState>,
  ) {
    appState.select(selectAppTheme).subscribe((appTheme) => {
      this.isLight = appTheme === AppTheme.LIGHT;
      this.isDark = appTheme === AppTheme.DARK;
    });
  }

  toggleMode() {
    this.appConfigService.toggleAppTheme();
  }

  ngOnInit(): void {
  }
}
