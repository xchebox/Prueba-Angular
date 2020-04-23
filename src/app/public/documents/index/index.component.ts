import { Component, OnInit } from '@angular/core';
//model
import { Database } from '../../../_models/database';
//service to retrieve data
import { DataService } from '../../../_providers/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public data: Database;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.bindData();
  }


  /**
   * bind local database
   */
  bindData(){
    this.dataService.loadLocalJson()
      .then((data: Database) => {
        this.data = data;
      })
      .catch((error: Error) => {
        console.log(`Error ${error.message}`);
      })
  }

}
