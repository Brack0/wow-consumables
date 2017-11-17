import { Injectable } from '@angular/core';

import { CraftedMaterial, Material, Recipes } from '@model';

@Injectable()
export class ComputeService {
  constructor() {}

  /**
   * Return Recipe for a CraftedMaterial
   * @param craftMaterial
   */
  public computeRecipe(
    craftMaterial: CraftedMaterial
  ): Array<{ component: Material; amount: number }> {
    return this.getCraftMaterial(craftMaterial);
  }

  /**
   * Update the list of all required Material for the wanted Consumables.
   * - Get Recipes
   * - Merge all Materials and required amount
   * - Push to ReplaySubject
   * @param wantedConsumables
   * @param recipes
   */
  public updateRequiredMaterial(
    wantedConsumables: { [idConsumable: number]: number },
    recipes: Recipes
  ): Array<{
    component: Material;
    amount: number;
  }> {
    // Using temp array to not trigger ReplaySubject
    const requiredMaterials: Array<{
      component: Material;
      amount: number;
    }> = [];

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
          {
            component: r.component,
            amount: r.amount * wantedNumber
          },
          r.component instanceof CraftedMaterial ? r.craftNumber : 1
        );
      });
    });
    return requiredMaterials;
  }

  /**
   * Merge Material with amount in an array
   * @param array
   * @param material
   */
  private mergeMaterial(
    array: Array<{ component: Material; amount: number }>,
    material: { component: Material; amount: number },
    craftNumber: number
  ): Array<{ component: Material; amount: number }> {
    let added: boolean = false;
    array.forEach(e => {
      if (e.component.idMaterial === material.component.idMaterial) {
        e.amount += material.amount / craftNumber;
        added = true;
      }
    });
    if (!added) {
      array.push({
        component: material.component,
        amount: material.amount / craftNumber
      });
    }
    return array;
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
              this.getCraftMaterial(b.component as CraftedMaterial),
              b.component.craftNumber
            )
          : this.mergeMaterial(a, b, craftMaterial.craftNumber),
      []
    );
  }

  /**
   * Merge an array of Material with amount in another
   * @param array
   * @param arrayMaterial
   */
  private mergeArrayMaterial(
    array: Array<{ component: Material; amount: number }>,
    arrayMaterial: Array<{ component: Material; amount: number }>,
    craftNumber: number
  ): Array<{ component: Material; amount: number }> {
    arrayMaterial.forEach(
      e => (array = this.mergeMaterial(array, e, craftNumber))
    );
    return array;
  }
}