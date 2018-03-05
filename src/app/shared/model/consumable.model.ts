import { Content } from './content.model';
import { CraftedMaterial } from './crafted-material.model';
import { Specialization } from './specialization.model';

export abstract class Consumable extends CraftedMaterial {
  effect: String = '';
  utility: Specialization[];
  maxNumber: number = this.craftNumber * 100;
  wantedNumber: number = 0;

  constructor(content: Content, init?: Partial<Consumable>) {
    super(content, init);
    Object.assign(this, init);
  }
}
