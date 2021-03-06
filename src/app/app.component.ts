import {
  AfterViewChecked,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { StateService } from './shared/services';

declare let $WowheadPower: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewChecked {
  private needWowRefresh: boolean = false;

  constructor(private stateService: StateService) {}

  public ngOnInit(): void {
    this.stateService.getRefreshWowTooltip().subscribe(update => {
      this.needWowRefresh = true;
    });
  }

  public ngAfterViewChecked(): void {
    if (this.needWowRefresh) {
      this.needWowRefresh = false;
      $WowheadPower.refreshLinks();
    }
  }
}
