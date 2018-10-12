import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { StateService } from '../../services';
import { ConsumableCategory, ConsumableType } from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookingComponent extends ProfessionComponent implements OnInit {
  public foodsCategories: ConsumableCategory[];

  constructor(
    protected stateService: StateService,
    private cd: ChangeDetectorRef
  ) {
    super(stateService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getData();
  }

  /**
   * Gather data from StateService
   */
  protected getData(): void {
    this.stateService.getFoods().subscribe(foodsCategories => {
      this.foodsCategories = foodsCategories;
    });

    this.stateService
      .getRequiredMaterial(ConsumableType.Cooking)
      .subscribe(materials => {
        this.requiredMaterials = materials;
        this.stateService.callRefreshWowTooltip();
        this.cd.markForCheck();
      });
  }
}
