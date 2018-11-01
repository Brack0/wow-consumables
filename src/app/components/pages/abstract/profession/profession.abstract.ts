import { ChangeDetectorRef, OnInit } from '@angular/core';
import { StateService } from 'src/app/services';
import { ConsumableType, MaterialCategory } from 'src/app/shared/model';

export abstract class ProfessionComponent implements OnInit {
  public requiredMaterials: MaterialCategory;
  private tabInit: boolean[];

  constructor(protected stateService: StateService, protected cd: ChangeDetectorRef) {}

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

  protected getRequiredMaterial(type: ConsumableType) {
    this.stateService.getRequiredMaterial(type).subscribe(materials => {
      this.requiredMaterials = materials;
      this.stateService.callRefreshWowTooltip();
      this.cd.markForCheck();
    });
  }

  protected abstract getData();
}
