import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { Plant } from './plant';
import { Flask } from './flask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'World of Warcraft - Consumables';
  plants: Plant[];
  flasks: Flask[];

  constructor(private dataService: DataService) { }

  getData(): void {
    this.dataService.getPlants()
      .then(plants => {
        this.plants = plants;
        console.log(this.plants);
      });

    this.dataService.getFlasks()
      .then(flasks => {
        this.flasks = flasks;
        console.log(this.flasks);
      });
  }

  ngOnInit(): void {
    this.getData();
  }
}
