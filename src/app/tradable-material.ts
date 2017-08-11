import { Content } from './content';
import { Material } from './material';

// Abstract for tradable wow materials with a currency (which is another Material)
export abstract class TradableMaterial extends Material {
    currency: Material;
    ratio: number;

    public constructor(content: Content, init?: Partial<TradableMaterial>) {
        super(content, init);
        Object.assign(this, init);
    }
}