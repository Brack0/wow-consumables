import { Component, OnInit, Input } from '@angular/core';
import { Material } from 'src/app/new-model/material.model';
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

  constructor(
    private materialService: MaterialService,
    private wowheadService: WowheadService
  ) {}

  ngOnInit() {
    this.materialService
      .getMaterialById(this.idMaterial)
      .subscribe((material) => {
        this.material = material;
        this.wowheadService.callRefreshWowTooltip();
      });
  }
}
