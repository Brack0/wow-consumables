import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { ComputeService } from './services/compute.service';
import { StateService } from './services/state.service';

import { Flask, Material, Plant, Potion, Specialization } from '@model';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StateService, ComputeService]
})
export class AppComponent implements OnInit, AfterViewChecked {
  needWowRefresh: boolean = false;
  title = 'World of Warcraft - Consumables';
  specializations: Specialization[];
  requiredMaterials: Array<{ component: Material; amount: number }>;
  plants: Plant[];
  flasks: Flask[];
  potions: Potion[];

  constructor(private stateService: StateService) {}

  getData(): void {
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

  reloadWowheadScript() {
    $WowheadPower.refreshLinks();
  }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewChecked(): void {
    if (this.needWowRefresh) {
      this.needWowRefresh = false;
      this.reloadWowheadScript();
    }
  }
}
