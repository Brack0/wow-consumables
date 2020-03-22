import { Content } from './content.model';
import { Materials } from './material.model';

interface SchemaInterface {
  $schema: string;
}

export type ContentSchema = Content & SchemaInterface;
export type MaterialSchema = Materials & SchemaInterface;
