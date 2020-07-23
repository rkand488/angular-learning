import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';
  constructor() { }

  ngOnInit() {
    var login = localStorage.getItem('login');
    if (login) {
      this.username = login;
    }
  }

  logout() {
    localStorage.clear();
    this.username = '';
  }

}
