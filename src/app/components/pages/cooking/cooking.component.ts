import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services';
import { ConsumableCategory, ConsumableType } from 'src/app/shared/model';
import { ProfessionComponent } from '../abstract';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookingComponent extends ProfessionComponent implements OnInit {
  public foodsCategories: ConsumableCategory[];

  constructor(protected stateService: StateService, protected cd: ChangeDetectorRef) {
    super(stateService, cd);
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

    this.getRequiredMaterial(ConsumableType.Cooking);
  }
}
