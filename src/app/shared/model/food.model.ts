import { Consumable } from './consumable.model';
import { Content } from './content.model';

export class Food extends Consumable {
  rank: number;

  public constructor(content: Content, init?: Partial<Food>) {
    super(content, init);
    Object.assign(this, init);
  }
}
