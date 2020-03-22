import {
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { StateService } from './shared/services';
import { Logger } from 'src/logger';
import { DataService } from './shared/new-service/data.service';

declare let $WowheadPower: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  private needWowRefresh: boolean = false;

  constructor(
    private stateService: StateService,
    private dataService: DataService,
    private logger: Logger
  ) {}

  public ngOnInit(): void {
    this.dataService.initData();
    this.stateService.getRefreshWowTooltip().subscribe(() => {
      this.needWowRefresh = true;
    });
  }

  public ngAfterViewChecked(): void {
    if (this.needWowRefresh) {
      this.needWowRefresh = false;
      this.logger.debug('refresh wow tooltip');
      $WowheadPower.refreshLinks();
    }
  }
}
