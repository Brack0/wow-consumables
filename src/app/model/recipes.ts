import { Material } from './material';

export class Recipes {
  [idMaterial: number]: Array<{ component: Material; amount: number }>;

  constructor(init?: Partial<Recipes>) {
    Object.assign(this, init);
  }
}
