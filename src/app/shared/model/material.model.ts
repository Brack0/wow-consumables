import { Content } from './content.model';

// Abstract class for wow materials
export abstract class Material extends Content {
  readonly order: number = 0;
  idMaterial: number;
  name: string;
  stackSize: number;

  constructor(content: Content, init?: Partial<Material>) {
    super(content);
    Object.assign(this, init);
  }
}
