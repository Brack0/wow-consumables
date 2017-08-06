import { Content } from './content'

// Abstract class for wow materials
export abstract class Material extends Content {
    id: number;
    name: string;
    stackSize: number;
}