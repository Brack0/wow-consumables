import { Material } from './material'

export abstract class Consumable extends Material {
    utility: Utility;
    craftMaterials: Array<[Material, number]>;
}

enum Utility {
    DPS,
    Tank,
    Heal,
    Hybrid
}