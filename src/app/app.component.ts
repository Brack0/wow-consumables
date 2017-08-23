import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { ComputeService } from './compute.service';
import { Specialization } from './specialization';
import { Plant } from './plant';
import { Flask } from './flask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, ComputeService]
})
export class AppComponent implements OnInit {
  title = 'World of Warcraft - Consumables';
  specializations: Specialization[];
  plants: Plant[];
  flasks: Flask[];

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
  }

  ngOnInit(): void {
    this.getData();
  }
}
