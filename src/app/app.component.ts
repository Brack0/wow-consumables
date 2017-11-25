import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { StateService } from 'app/services/state.service';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public needWowRefresh: boolean = false;

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
