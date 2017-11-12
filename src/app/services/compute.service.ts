import { Injectable } from '@angular/core';

import { Recipes } from '../model/recipes';
import { Material } from '../model/material';
import { CraftedMaterial } from '../model/crafted-material';

@Injectable()
export class ComputeService {
  constructor() {}

  /**
   * Return Recipe for a CraftedMaterial
   * @param craftMaterial
   */
  computeRecipe(
    craftMaterial: CraftedMaterial
  ): Array<{ component: Material; amount: number }> {
    return this.getCraftMaterial(craftMaterial);
  }

  /**
   * Preorder Traversal of Materials.
   * - If a Material (ie. a node) is crafted
   * - Then gather its own Materials
   * - Else save it
   * @param craftMaterial
   */
  private getCraftMaterial(
    craftMaterial: CraftedMaterial
  ): Array<{ component: Material; amount: number }> {
    return craftMaterial.craftMaterials.reduce(
      (a, b) =>
        b.component instanceof CraftedMaterial
          ? this.mergeArrayMaterial(
              a,
              this.getCraftMaterial(b.component as CraftedMaterial)
            )
          : this.mergeMaterial(a, b),
      []
    );
  }

  /**
   * Merge Material with amount in an array
   * @param array
   * @param material
   */
  public mergeMaterial(
    array: Array<{ component: Material; amount: number }>,
    material: { component: Material; amount: number }
  ): Array<{ component: Material; amount: number }> {
    let added: boolean = false;
    array.forEach(e => {
      if (e.component.idMaterial === material.component.idMaterial) {
        e.amount += material.amount;
        added = true;
      }
    });
    if (!added) {
      array.push(Object.assign({}, material));
    }
    return array;
  }

  /**
   * Merge an array of Material with amount in another
   * @param array
   * @param arrayMaterial
   */
  private mergeArrayMaterial(
    array: Array<{ component: Material; amount: number }>,
    arrayMaterial: Array<{ component: Material; amount: number }>
  ): Array<{ component: Material; amount: number }> {
    arrayMaterial.forEach(e => (array = this.mergeMaterial(array, e)));
    return array;
  }
}
