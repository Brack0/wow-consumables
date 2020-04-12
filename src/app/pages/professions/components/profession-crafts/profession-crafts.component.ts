import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profession } from 'src/app/new-model/profession.model';

@Component({
  selector: 'wowc-profession-crafts',
  templateUrl: './profession-crafts.component.html',
  styleUrls: ['./profession-crafts.component.scss'],
})
export class ProfessionCraftsComponent implements OnInit {
  private profession: Profession;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((routeData) => {
      this.profession = routeData.profession;
    });
  }

  isAlchemy() {
    return this.profession === Profession.ALCHEMY;
  }

  isCooking() {
    return this.profession === Profession.COOKING;
  }
}
