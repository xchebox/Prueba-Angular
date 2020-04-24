import { Document } from './document'

export class Database {
  public documents: Array<Document>;

  constructor(documents: Array<Document>){
    this.documents = documents;
  }
}
