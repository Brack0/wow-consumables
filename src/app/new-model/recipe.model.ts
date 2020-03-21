export interface Recipe {
  rank?: number;
  craftNumber: number;
  reagents: RecipeReagent[];
}

export interface RecipeReagent {
  idMaterial: number;
  amount: number;
}
