import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services';
import {
  ConsumableType,
  Flask,
  Plant,
  Potion,
  Reagent,
  RequiredMaterial,
  Specialization
} from '../../shared/model';

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
  private tabInit: boolean[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.getData();
    this.initFirstTab();
  }

  public callRefreshWowTooltip($event): void {
    if (!this.tabInit[$event.index]) {
      this.stateService.callRefreshWowTooltip();
      this.tabInit[$event.index] = true;
    }
  }

  private initFirstTab() {
    this.stateService.callRefreshWowTooltip();
    this.tabInit = [true];
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
      this.stateService.callRefreshWowTooltip();
    });
  }
}
