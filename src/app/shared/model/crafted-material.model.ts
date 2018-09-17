import { Content } from './content.model';
import { Material } from './material.model';
import { RankedCraft } from './ranked-craft.model';
import { RequiredMaterial } from './required-material.model';

export class CraftedMaterial extends Material {
  craftMaterials: RequiredMaterial[];
  craftNumber: number = 1;
  rank: number = 0;
  rankedCraftMaterial: RankedCraft[];

  constructor(content: Content, init?: Partial<CraftedMaterial>) {
    super(content, init);
    Object.assign(this, init);
    if (this.rankedCraftMaterial) {
      this.rank = 3; // Default rank : 3
      this.changeRank(this.rank);
    }
  }

  changeRank(newRank: number) {
    if (this.rankedCraftMaterial[newRank - 1]) {
      this.rank = newRank;
      this.craftMaterials = this.rankedCraftMaterial[newRank - 1].craftMaterials;
      this.craftNumber = this.rankedCraftMaterial[newRank - 1].craftNumber;
    }
  }
}
