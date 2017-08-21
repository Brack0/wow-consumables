import { Content } from './content';
import { Material } from './material';
import { Spec } from './utils.service';

export abstract class Consumable extends Material {
    utility: Spec;
    craftMaterials: Array<{component: Material, amount: number}>;
    wantedNumber: number;

    public constructor(content: Content, init?: Partial<Consumable>) {
        super(content, init);
        Object.assign(this, init);
    }
}