import { Component } from '@angular/core';

import { ComputeService } from '../../services/compute.service';
import { StateService } from '../../services/state.service';

import { Flask, Material, Plant, Potion, Specialization } from '@model';

@Component({
  selector: 'app-alchemy',
  templateUrl: './alchemy.component.html',
  styleUrls: ['./alchemy.component.scss']
})
export class AlchemyComponent {
  public title: string = 'Alchemy - Legion';
  public specializations: Specialization[];
  public requiredMaterials: Array<{ component: Material; amount: number }>;
  public plants: Plant[];
  public flasks: Flask[];
  public potions: Potion[];

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

    this.stateService.getPlants().subscribe(plants => {
      this.plants = plants;
    });

    this.stateService.getFlasks().subscribe(flasks => {
      this.flasks = flasks;
    });

    this.stateService.getPotions().subscribe(potions => {
      this.potions = potions;
    });

    this.stateService.getRequiredMaterial().subscribe(materials => {
      this.requiredMaterials = materials;
      this.callRefreshWowTooltip();
    });
  }
}
