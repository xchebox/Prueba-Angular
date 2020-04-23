import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User
  initials: string

  constructor() {
    this.user = new User(0, 'Jose Franco Lumbreras Fabian');
    this.initials = this.user.getInitials();
  }

  ngOnInit() {
  }

}
