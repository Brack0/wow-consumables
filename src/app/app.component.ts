import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ComputeService } from './services/compute.service';
import { StateService } from './services/state.service';

import { Flask, Material, Plant, Potion, Specialization } from '@model';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public needWowRefresh: boolean = false;
  public title = 'World of Warcraft - Consumables';
  public specializations: Specialization[];
  public requiredMaterials: Array<{ component: Material; amount: number }>;
  public plants: Plant[];
  public flasks: Flask[];
  public potions: Potion[];

  constructor(private stateService: StateService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public ngAfterViewChecked(): void {
    if (this.needWowRefresh) {
      this.needWowRefresh = false;
      this.reloadWowheadScript();
    }
  }

  public reloadWowheadScript() {
    $WowheadPower.refreshLinks();
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
      this.needWowRefresh = true;
    });
  }
}
