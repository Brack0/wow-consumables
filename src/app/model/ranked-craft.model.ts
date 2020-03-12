import { RequiredMaterial } from './required-material.model';

export class RankedCraft {
  rank: number;
  craftMaterials: RequiredMaterial[];
  craftNumber: number = 1;
}
