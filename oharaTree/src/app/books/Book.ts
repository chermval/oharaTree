export class Book {
    public isbn: string;
    public title: string;
    public autor: string;
    public format: string;
    public type: string;
    public collection: string;


    public constructor(init?:Partial<Book>) {
      Object.assign(this, init);
    }
  }
