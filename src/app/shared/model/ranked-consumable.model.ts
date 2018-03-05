import { Consumable } from './consumable.model';
import { Content } from './content.model';

export class RankedConsumable extends Consumable {
  rank: number;

  constructor(content: Content, init?: Partial<RankedConsumable>) {
    super(content, init);
    Object.assign(this, init);
  }
}
