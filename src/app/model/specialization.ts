export class Specialization {
  idSpec: number;
  name: string;
  icon: string;

  constructor(init?: Partial<Specialization>) {
    Object.assign(this, init);
  }
}
