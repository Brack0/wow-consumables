import { Recipe } from './recipe.model';
import { Specialization } from './specialization.model';

export enum Profession {
  ALCHEMY = 'ALCHEMY',
  FOOD = 'FOOD',
}

export interface Material {
  category: string;
  idMaterial: number;
  name: string;
  profession?: Profession;
  effect?: string;
  specializations?: Specialization[];
  recipe?: Recipe;
  recipes?: Recipe[];
}
