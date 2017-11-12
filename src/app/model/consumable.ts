import { Content } from './content';
import { Specialization } from './specialization';
import { CraftedMaterial } from './crafted-material';

export abstract class Consumable extends CraftedMaterial {
  utility: Array<Specialization>;
  wantedNumber: number = 0;

  public constructor(content: Content, init?: Partial<Consumable>) {
    super(content, init);
    Object.assign(this, init);
  }
}
