import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import {
  Fish,
  Flask,
  Food,
  Meat,
  Plant,
  Potion,
  Reagent,
  Specialization
} from '../../shared/model';
import { ProfessionComponent } from '../abstract/profession/profession.abstract';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends ProfessionComponent implements OnInit {
  protected specializations: Specialization[];
  protected reagents: Reagent[];
  protected plants: Plant[];
  protected meats: Meat[];
  protected fishs: Fish[];
  protected flasks: Flask[];
  protected potions: Potion[];
  protected foods: Food[][];

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
