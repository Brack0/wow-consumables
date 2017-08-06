import { Material } from './material'

// Abstract for tradable wow materials with a currency (which is another Material)
export abstract class TradableMaterial extends Material {
    currency: Material;
    ratio: number;
}