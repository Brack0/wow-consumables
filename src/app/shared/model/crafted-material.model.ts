import { Content } from './content.model';
import { Material } from './material.model';

export class CraftedMaterial extends Material {
  craftMaterials: Array<{ component: Material; amount: number }>;
  craftNumber: number = 1;

  public constructor(content: Content, init?: Partial<CraftedMaterial>) {
    super(content, init);
    Object.assign(this, init);
  }
}
