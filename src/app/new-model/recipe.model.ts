export interface Recipe {
  rank?: number;
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
