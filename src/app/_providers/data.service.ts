import { Injectable } from '@angular/core';
import { Database } from '../_models/database'

// json file in which the db information is stored
import * as db from '../../assets/db.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * load the information from the local json file
   * @return a promise with the information or an error
   */
  loadLocalJson(): Promise<Database>{
    return new Promise<Database> ((resolve, reject) => {
      resolve(new Database(db.documents as any))
    });
  }

}
