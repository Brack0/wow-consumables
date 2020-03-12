import { Material } from './material.model';
import { RequiredMaterial } from './required-material.model';

export class MaterialCategory {
  category: string;
  materialArray?: Material[];
  requiredMaterialArray?: RequiredMaterial[];

  constructor(category: string, materialArray: Material[]) {
    this.category = category;
    this.materialArray = materialArray;
  }
}
