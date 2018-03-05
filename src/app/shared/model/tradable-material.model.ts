import { Content } from './content.model';
import { Material } from './material.model';

// Abstract for tradable wow materials with a currency (which is another Material)
export abstract class TradableMaterial extends Material {
  // Traded material
  currency: Material;
  // Amount of material given when traded
  ratio: number;

  constructor(content: Content, init?: Partial<TradableMaterial>) {
    super(content, init);
    Object.assign(this, init);
  }
}
