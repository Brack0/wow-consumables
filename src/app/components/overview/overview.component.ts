import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import { Fish, Flask, Food, Meat, Plant, Potion, Reagent, Specialization } from '../../shared/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public title: string = 'Alchemy - Legion';
  public specializations: Specialization[];
  public reagents: Reagent[];
  public plants: Plant[];
  public meats: Meat[];
  public fishs: Fish[];
  public flasks: Flask[];
  public potions: Potion[];
  public foods: Food[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.getData();
    this.callRefreshWowTooltip();
  }

  public callRefreshWowTooltip(): void {
    this.stateService.callRefreshWowTooltip();
  }

  /**
   * Gather data from StateService
   */
  private getData(): void {
    this.stateService.getSpecializations().subscribe(specializations => {
      this.specializations = specializations;
    });

    this.stateService.getReagents().subscribe(reagents => {
      this.reagents = reagents;
    });

    this.stateService.getPlants().subscribe(plants => {
      this.plants = plants;
    });

    this.stateService.getMeats().subscribe(meats => {
      this.meats = meats;
    });

    this.stateService.getFishs().subscribe(fishs => {
      this.fishs = fishs;
    });

    this.stateService.getFlasks().subscribe(flasks => {
      this.flasks = flasks;
    });

    this.stateService.getPotions().subscribe(potions => {
      this.potions = potions;
    });

    this.stateService.getFoods().subscribe(foods => {
      this.foods = foods;
    });
  }
}
