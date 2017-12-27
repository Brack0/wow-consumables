import { Component } from '@angular/core';

import { ComputeService } from '../../services/compute.service';
import { StateService } from '../../services/state.service';

import {
  ConsumableType,
  Fish,
  Food,
  Material,
  Meat,
  Reagent,
  Specialization
} from '@model';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent {
  public title: string = 'Cooking - Legion';
  public specializations: Specialization[];
  public requiredMaterials: Array<{ component: Material; amount: number }>;
  public reagents: Reagent[];
  public meats: Meat[];
  public fishs: Fish[];
  public averageFoods: [Food[]];
  public betterFoods: [Food[]];
  public bestFoods: [Food[]];
  public feasts: [Food[]];

  constructor(private stateService: StateService) {
    this.getData();
    this.callRefreshWowTooltip();
  }

  public callRefreshWowTooltip(): void {
    this.stateService.callRefreshWowTooltip();
  }

  private getData(): void {
    this.stateService.getSpecializations().subscribe(specializations => {
      this.specializations = specializations;
    });

    this.stateService.getReagents().subscribe(reagents => {
      this.reagents = reagents;
    });

    this.stateService.getMeats().subscribe(meats => {
      this.meats = meats;
    });

    this.stateService.getFishs().subscribe(fishs => {
      this.fishs = fishs;
    });

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
      if (feasts) {
        this.feasts = feasts;
      }
    });

    this.stateService
      .getRequiredMaterial(ConsumableType.Cooking)
      .subscribe(materials => {
        this.requiredMaterials = materials;
        this.callRefreshWowTooltip();
      });
  }
}
