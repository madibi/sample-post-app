import {Component} from '@angular/core';
import {AppConfigService} from "@commons/services/app-config.service";
import {AppTheme} from "@commons/schema/app/enum/app-theme.enum";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  constructor(
    private appConfigService: AppConfigService
  ) {
    this.appConfigService.initAppTheme(AppTheme.DARK);
  }

  ngOnInit(): void {
  }
}
