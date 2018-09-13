import { OnInit } from '@angular/core';
import { StateService } from '../../../services';
import { RequiredMaterial } from '../../../shared/model';

export abstract class ProfessionComponent implements OnInit {
  public requiredMaterials: RequiredMaterial[];
  private tabInit: boolean[];

  constructor(protected stateService: StateService) {}

  ngOnInit(): void {
    this.initFirstTab();
  }

  public callRefreshWowTooltip($event): void {
    if (!this.tabInit[$event.index]) {
      this.stateService.callRefreshWowTooltip();
      this.tabInit[$event.index] = true;
    }
  }

  protected initFirstTab() {
    this.stateService.callRefreshWowTooltip();
    this.tabInit = [true];
  }

  protected abstract getData();
}
