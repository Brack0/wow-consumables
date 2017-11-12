import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { DataService } from './services/data.service';
import { StateService } from './services/state.service';
import { ComputeService } from './services/compute.service';

import { Specialization } from './model/specialization';
import { Plant } from './model/plant';
import { Flask } from './model/flask';
import { Potion } from './model/potion';
import { Material } from './model/material';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, StateService, ComputeService]
})
export class AppComponent implements OnInit, AfterViewChecked {
  needWowRefresh: boolean = false;
  title = 'World of Warcraft - Consumables';
  specializations: Specialization[];
  requiredMaterials: Array<{ component: Material; amount: number }>;
  plants: Plant[];
  flasks: Flask[];
  potions: Potion[];

  constructor(
    private dataService: DataService,
    private stateService: StateService
  ) {}

  getData(): void {
    this.dataService.getSpecializations().subscribe(specializations => {
      this.specializations = specializations;
    });

    this.dataService.getPlants().subscribe(plants => {
      this.plants = plants;
    });

    this.dataService.getFlasks().subscribe(flasks => {
      this.flasks = flasks;
    });

    this.dataService.getPotions().subscribe(potions => {
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
