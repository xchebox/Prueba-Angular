import { Component, OnInit, HostListener } from '@angular/core';
//model
import { Database } from '../../../_models/database';
//service to retrieve data
import { DataService } from '../../../_providers/data.service';
//navbar
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public data: Database;
  public loading = false;

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
    if (this.loading){
      return;
    }
    this.loading = true;
    this.dataService.loadLocalJson()
      .then((data: Database) => {
        this.data = data;
      })
      .catch((error: Error) => {
        console.log(`Error ${error.message}`);
      })
      .finally(()=> {
        this.loading = false;
      });
  }

  /**
   * request new data
   *
   */
  requestNewData(){
    if (this.loading){
      return;
    }
    this.loading = true;
    this.dataService.loadLocalJson()
      .then((data: Database) => {
        this.data.documents = this.data.documents.concat(data.documents);
      })
      .catch((error: Error) => {
        console.log(`Error ${error.message}`);
      })
      .finally(()=> {
        this.loading = false;
      });
  }

  /**
   * scroll event
   */
  onScroll(event: Event){
    let target = event.target as any;
    if (target.scrollHeight <= target.scrollTop + target.offsetHeight){
      this.requestNewData();
    }
  }

}
