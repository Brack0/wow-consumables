import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { Flask, Material, Plant, Potion, Specialization } from '@model';
import { ComputeService, StateService } from '@services';

declare let $WowheadPower;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StateService, ComputeService]
})
export class AppComponent implements OnInit, AfterViewChecked {
  private needWowRefresh: boolean = false;
  private title = 'World of Warcraft - Consumables';
  private specializations: Specialization[];
  private requiredMaterials: Array<{ component: Material; amount: number }>;
  private plants: Plant[];
  private flasks: Flask[];
  private potions: Potion[];

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

  private reloadWowheadScript() {
    $WowheadPower.refreshLinks();
  }
}
