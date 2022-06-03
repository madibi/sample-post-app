import {Component} from '@angular/core';
import {AppConfigService} from "@commons/services/app-config.service";
import {AppTheme} from "@commons/schema/app/enum/app-theme.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appConfigService: AppConfigService
  ) {
    this.appConfigService.initAppTheme(AppTheme.DARK);
  }

  ngOnInit(): void {
  }
}
