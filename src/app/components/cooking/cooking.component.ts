import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import { ConsumableType, Food } from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent extends ProfessionComponent implements OnInit {
  protected averageFoods: Food[][];
  protected betterFoods: Food[][];
  protected bestFoods: Food[][];
  protected feasts: Food[][];

  constructor(protected stateService: StateService) {
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
    this.stateService.getAverageFoods().subscribe(foods => {
      this.averageFoods = foods;
    });

    this.stateService.getBetterFoods().subscribe(foods => {
      this.betterFoods = foods;
    });

    this.stateService.getBestFoods().subscribe(foods => {
      this.bestFoods = foods;
    });

    this.stateService.getFeasts().subscribe(feasts => {
      this.feasts = feasts;
    });

    this.stateService.getRequiredMaterial(ConsumableType.Cooking).subscribe(materials => {
      this.requiredMaterials = materials;
      this.stateService.callRefreshWowTooltip();
    });
  }
}
