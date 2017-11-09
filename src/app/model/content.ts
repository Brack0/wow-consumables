export class Content {
  idContent: number;
  expansionName: string;
  patch: string;
  releaseDate: Date;

  constructor(init?: Partial<Content>) {
    Object.assign(this, init);
  }
}
