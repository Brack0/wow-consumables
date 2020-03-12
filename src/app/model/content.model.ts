export class Content {
  idContent: number;
  expansionName: string;
  patch: string;
  releaseDate: Date;
  url: string;

  constructor(init?: Partial<Content>) {
    Object.assign(this, init);
  }

  public getFullName(): string {
    return this.patch + '\nLast updated : ' + this.releaseDate.toLocaleDateString();
  }
}
