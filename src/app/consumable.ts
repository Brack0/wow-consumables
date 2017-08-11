import { Material } from './material'
import { Spec } from './utils.service'

export abstract class Consumable extends Material {
    utility: Spec;
    craftMaterials: Array<[Material, number]>;
}