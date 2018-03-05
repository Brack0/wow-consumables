import { Material } from './material.model';
import { RequiredMaterial } from './required-material.model';

export class Recipes {
  [idMaterial: number]: RequiredMaterial[];
}
