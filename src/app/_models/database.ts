import { Document } from './document'

export class Database {
  private documents: Array<Document>;


  constructor(documents: Array<Document>){
    this.documents = documents;
  }
}
