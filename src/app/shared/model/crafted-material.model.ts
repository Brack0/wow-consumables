import { Content } from './content.model';
import { Material } from './material.model';
import { RequiredMaterial } from './required-material.model';

export class CraftedMaterial extends Material {
  craftMaterials: RequiredMaterial[];
  craftNumber: number = 1;

  constructor(content: Content, init?: Partial<CraftedMaterial>) {
    super(content, init);
    Object.assign(this, init);
  }
}
