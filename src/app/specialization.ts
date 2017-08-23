export class Specialization {
    idSpec: number;
    name: string;

    constructor(init?: Partial<Specialization>) {
        Object.assign(this, init);
    }
}