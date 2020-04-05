import { Content } from './content.model';
import { Material } from './material.model';

interface SchemaInterface {
  $schema: string;
}

interface Materials {
  materials: Material[];
}

export type ContentSchema = Content & SchemaInterface;
export type MaterialSchema = Materials & SchemaInterface;
