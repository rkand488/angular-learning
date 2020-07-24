import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {


  username: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    var login = localStorage.getItem('login');
    if (login) {
      this.username = login;
    }
  }

  logout() {
    localStorage.clear();
    this.username = '';
    this.router.navigateByUrl("/login");
  }

}
