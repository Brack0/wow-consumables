import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Material } from 'src/app/new-model/material.model';
import { RecipeReagent } from 'src/app/new-model/recipe.model';
import { MaterialService, WowheadService } from '../../new-services';

@Component({
  selector: 'wowc-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input()
  private idMaterial: number;
  material: Material;

  rank: number = 0;

  constructor(
    private materialService: MaterialService,
    private wowheadService: WowheadService
  ) {}

  ngOnInit() {
    this.materialService
      .getMaterialById(this.idMaterial)
      .subscribe((material) => this.initMaterial(material));
  }

  private initMaterial(material: Material) {
    this.material = material;

    if (this.material.recipes) {
      this.rank = 3;
    }

    this.wowheadService.callRefreshWowTooltip();
  }

  getCraftNumber(): number {
    if (this.rank) {
      return this.material.recipes[this.rank].craftNumber;
    }
    return this.material.recipe.craftNumber;
  }

  getReagents(): RecipeReagent[] {
    if (this.rank) {
      return this.material.recipes[this.rank].reagents;
    }
    return this.material.recipe.reagents;
  }

  updateRank(event: MatSliderChange) {
    this.rank = event.value;
  }
}
