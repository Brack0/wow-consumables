import { Material } from './material.model';

export class RequiredMaterial {
  component: Material;
  amount: number;

  constructor(component: Material, amount: number) {
    this.component = component;
    this.amount = amount;
  }
}
