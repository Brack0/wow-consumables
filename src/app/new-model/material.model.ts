import { Profession } from './profession.model';
import { RankedRecipe, Recipe } from './recipe.model';
import { Specialization } from './specialization.model';

export interface Material {
  category: string;
  idMaterial: number;
  name: string;
  profession?: Profession;
  effect?: string;
  specializations?: Specialization[];
  recipe?: Recipe;
  recipes?: RankedRecipe;
}
