import { Injectable } from '@angular/core';

import {
  Consumable,
  ConsumableType,
  CraftedMaterial,
  Flask,
  Food,
  Material,
  Potion,
  Recipes,
  RequiredMaterial,
  WantedConsumables
} from 'app/shared/model';

@Injectable()
export class ComputeService {
  constructor() {}

  /**
   * Return type of Consumable (Enum)
   * @param consumable Consumable to handle
   */
  public getConsumableType(consumable: Consumable): ConsumableType {
    if (consumable instanceof Potion || consumable instanceof Flask) {
      return ConsumableType.Alchemy;
    } else if (consumable instanceof Food) {
      return ConsumableType.Cooking;
    }
  }

  /**
   * Return Recipe for a CraftedMaterial
   * @param craftMaterial CraftedMaterial to compute
   */
  public computeRecipe(craftMaterial: CraftedMaterial): RequiredMaterial[] {
    return this.getCraftMaterial(craftMaterial);
  }

  /**
   * Update the list of all required Material for the wanted Consumables.
   * - Get Recipes
   * - Merge all Materials and required amount
   * - Return all required materials
   * @param wantedConsumables WantedConsumables from user input
   * @param recipes Recipes for crafting consumables
   */
  public updateRequiredMaterial(
    wantedConsumables: WantedConsumables,
    recipes: Recipes
  ): RequiredMaterial[] {
    const requiredMaterials: RequiredMaterial[] = [];

    Object.entries(wantedConsumables).forEach(e => {
      const idConsumable = e[0];
      // Object.entries() does not handle type
      const wantedNumber = e[1] as number;

      // Find recipe
      const recipe = recipes[idConsumable];

      // merge material ( recipe * number )
      recipe.forEach(r => {
        this.mergeMaterial(
          requiredMaterials,
          r,
          wantedNumber,
          r.component instanceof CraftedMaterial ? r.craftNumber : 1
        );
      });
    });
    return requiredMaterials;
  }

  /**
   * Merge Material with amount in an array
   * @param array Array to merge with
   * @param material Material to push in Array
   * @param wantedNumber Number of Material wanted
   * @param craftNumber Number of Material crafted
   */
  private mergeMaterial(
    array: RequiredMaterial[],
    material: RequiredMaterial,
    wantedNumber: number,
    craftNumber: number
  ): RequiredMaterial[] {
    let added: boolean = false;
    const amountToAdd: number = material.amount * wantedNumber / craftNumber;

    array.forEach(e => {
      if (e.component.idMaterial === material.component.idMaterial) {
        // Update value if exists
        e.amount += amountToAdd;
        added = true;
      }
    });

    if (!added) {
      // Add new value if not exists
      array.push(new RequiredMaterial(material.component, amountToAdd));
    }

    return array;
  }

  /**
   * Preorder Traversal of Materials.
   * - If a Material (ie. a node) is crafted
   * - Then gather its own Materials
   * - Else save it
   * @param craftMaterial CraftedMaterial to compute
   * @param wantedNumber Number of Material wanted (default value for recipes)
   */
  private getCraftMaterial(
    craftMaterial: CraftedMaterial,
    wantedNumber: number = 1
  ): RequiredMaterial[] {
    return craftMaterial.craftMaterials.reduce((a, b) => {
      if (b.component instanceof CraftedMaterial) {
        return this.mergeArrayMaterial(
          a,
          this.getCraftMaterial(b.component as CraftedMaterial, b.amount),
          wantedNumber,
          craftMaterial.craftNumber
        );
      } else {
        return this.mergeMaterial(a, b, wantedNumber, craftMaterial.craftNumber);
      }
    }, []);
  }

  /**
   * Merge an array of Material with amount in another
   * @param array Array to merge with
   * @param arrayMaterial Array of Material to push
   * @param wantedNumber Number of Material wanted
   * @param craftNumber Number of Material crafted
   */
  private mergeArrayMaterial(
    array: RequiredMaterial[],
    arrayMaterial: RequiredMaterial[],
    wantedNumber: number,
    craftNumber: number
  ): RequiredMaterial[] {
    arrayMaterial.forEach(e => (array = this.mergeMaterial(array, e, wantedNumber, craftNumber)));
    return array;
  }
}
