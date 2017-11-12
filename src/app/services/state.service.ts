import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import '@rxjs';

import { ComputeService } from './compute.service';

import { Material } from '../model/material';
import { Recipes } from '../model/recipes';
import { CraftedMaterial } from '../model/crafted-material';
import { Consumable } from '../model/consumable';

@Injectable()
export class StateService {
  requiredMaterialsSubject: ReplaySubject<
    Array<{ component: Material; amount: number }>
  > = new ReplaySubject(1);
  wantedConsumables: { [idConsumable: number]: number } = {};
  recipes: Recipes = new Recipes();
  consumables: { [idConsumable: number]: Consumable } = {};

  constructor(private computeService: ComputeService) {}

  /**
   * Create a ReplaySubject
   * Subscribe to get updated list of required material
   */
  getRequiredMaterial(): ReplaySubject<
    Array<{ component: Material; amount: number }>
  > {
    return this.requiredMaterialsSubject;
  }

  /**
   * Create a new recipe for the material if needed (ie. not known by the StateService)
   * @param material New Material to handle
   */
  updateRecipes(material: CraftedMaterial): void {
    if (!this.recipes[material.idMaterial]) {
      this.recipes[material.idMaterial] = this.computeService.computeRecipe(
        material
      );
    }
  }

  /**
   * Update list of wanted materials
   * @param consumable New Consumable to handle
   */
  updateWantedConsumables(consumable: Consumable): void {
    if (consumable.wantedNumber) {
      this.wantedConsumables[consumable.idMaterial] = consumable.wantedNumber;
      this.updateRecipes(consumable);
      this.updateRequiredMaterial();
    } else {
      delete this.wantedConsumables[consumable.idMaterial];
      this.updateRequiredMaterial();
    }
  }

  /**
   * Update the list of all required Material for the wanted Consumables.
   * - Get Recipes
   * - Merge all Materials and required amount
   * - Push to ReplaySubject
   */
  private updateRequiredMaterial(): void {
    // Using temp array to not trigger ReplaySubject
    const requiredMaterials: Array<{
      component: Material;
      amount: number;
    }> = [];

    Object.entries(this.wantedConsumables).forEach(e => {
      const idConsumable = e[0];
      // Object.entries() does not handle type
      const wantedNumber = e[1] as number;

      // Find recipe
      const recipe = this.recipes[idConsumable];

      // merge material ( recipê * number )
      recipe.forEach(r => {
        this.computeService.mergeMaterial(requiredMaterials, {
          component: r.component,
          amount: r.amount * wantedNumber
        });
      });
    });

    this.requiredMaterialsSubject.next(requiredMaterials);
  }
}
