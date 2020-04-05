import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Logger } from 'src/logger';
import { WowheadService } from './shared/new-service/wowhead.service';

declare let $WowheadPower: any;

@Component({
  selector: 'wowc-root',
  template: '<wowc-full-page></wowc-full-page>',
})
export class AppComponent implements OnInit, AfterViewChecked {
  private needWowRefresh: boolean = false;

  constructor(private logger: Logger, private wowheadService: WowheadService) {}

  ngOnInit() {
    this.wowheadService.refreshWowTooltip$.subscribe(() => {
      this.needWowRefresh = true;
    });
  }

  ngAfterViewChecked() {
    if (this.needWowRefresh) {
      this.needWowRefresh = false;
      this.logger.debug('refresh wow tooltip');
      $WowheadPower.refreshLinks();
    }
  }
}
