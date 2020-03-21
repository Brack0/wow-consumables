import { Content } from '../../src/app/new-model/content.model';
import { Materials } from '../../src/app/new-model/material.model';

interface SchemaInterface {
  $schema: string;
}

export type ContentSchema = Content & SchemaInterface;
export type MaterialSchema = Materials & SchemaInterface;
