import { Component, OnInit } from '@angular/core';

import { ComputeService, StateService } from 'app/services';

import {
  ConsumableType,
  Flask,
  Material,
  Plant,
  Potion,
  Reagent,
  RequiredMaterial,
  Specialization
} from 'app/shared/model';

@Component({
  selector: 'app-alchemy',
  templateUrl: './alchemy.component.html',
  styleUrls: ['./alchemy.component.scss']
})
export class AlchemyComponent implements OnInit {
  public title: string = 'Alchemy - Legion';
  public specializations: Specialization[];
  public requiredMaterials: RequiredMaterial[];
  public reagents: Reagent[];
  public plants: Plant[];
  public flasks: Flask[];
  public potions: Potion[];

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

    this.stateService.getFlasks().subscribe(flasks => {
      this.flasks = flasks;
    });

    this.stateService.getPotions().subscribe(potions => {
      this.potions = potions;
    });

    this.stateService.getRequiredMaterial(ConsumableType.Alchemy).subscribe(materials => {
      this.requiredMaterials = materials;
      this.callRefreshWowTooltip();
    });
  }
}
