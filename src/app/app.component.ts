import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'World of Warcraft - Consumables';
  plants: Plant[];

  constructor(private dataService: DataService) { }

  getPlants(): void {
    this.dataService.getPlants()
      .then(plants => {
        this.plants = plants;
        console.log(this.plants);
      });
  }

  ngOnInit(): void {
    this.getPlants();
  }
}
