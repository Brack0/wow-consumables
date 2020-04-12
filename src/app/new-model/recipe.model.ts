export interface Recipe {
  craftNumber: number;
  reagents: RecipeReagent[];
}

export interface RankedRecipe {
  [rank: number]: Recipe;
}

export interface RecipeReagent {
  idMaterial: number;
  amount: number;
}
