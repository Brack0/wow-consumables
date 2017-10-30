import { Content } from './content';
import { Material } from './material';
import { Specialization } from './specialization';

export abstract class Consumable extends Material {
    utility: Array<Specialization>;
    craftMaterials: Array<{component: Material, amount: number}>;
    craftNumber = 1; // number
    wantedNumber = 0; // number

    public constructor(content: Content, init?: Partial<Consumable>) {
        super(content, init);
        Object.assign(this, init);
    }
}
