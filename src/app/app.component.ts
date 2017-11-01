import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { ComputeService } from './services/compute.service';
import { Specialization } from './model/specialization';
import { Plant } from './model/plant';
import { Flask } from './model/flask';
import { Potion } from './model/potion';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, ComputeService]
})
export class AppComponent implements OnInit {
  title = 'World of Warcraft - Consumables';
  specializations: Specialization[];
  plants: Plant[];
  flasks: Flask[];
  potions: Potion[];

  constructor(private dataService: DataService) { }

  getData(): void {
    this.dataService.getSpecializations()
      .then(specializations => {
        this.specializations = specializations;
      });

    this.dataService.getPlants()
      .then(plants => {
        this.plants = plants;
      });

    this.dataService.getFlasks()
      .then(flasks => {
        this.flasks = flasks;
      });

    this.dataService.getPotions()
      .then(potions => {
        this.potions = potions;
      });
  }

  reloadWowheadScript() {
    $WowheadPower.init();
  }

  ngOnInit(): void {
    this.getData();
  }
}
