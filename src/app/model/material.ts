import { Content } from './content';

// Abstract class for wow materials
export abstract class Material extends Content {
  idMaterial: number;
  name: string;
  stackSize: number;

  constructor(content: Content, init?: Partial<Material>) {
    super(content);
    Object.assign(this, init);
  }
}
