import { Component } from '@angular/core';

import { ComputeService } from '../../services/compute.service';
import { StateService } from '../../services/state.service';

import {
  Feast,
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
  public foods: Food[];
  public feasts: Feast[];

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

    this.stateService.getFoods().subscribe(foodsArr => {
      this.foods = foodsArr.map(e => e[0]);
    });

    this.stateService.getFeasts().subscribe(feastsArr => {
      if (feastsArr) {
        this.feasts = feastsArr.map(e => e[0]);
      }
    });

    this.stateService.getRequiredMaterial().subscribe(materials => {
      this.requiredMaterials = materials;
      this.callRefreshWowTooltip();
    });
  }
}
