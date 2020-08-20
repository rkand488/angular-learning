import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';
  html: string = "<p><b>Name</b> Rahul</p>";
  WeekDay: Date = new Date();
  jsonpipe: any = { name: "vikash", address: 'Jaunpur, up' };
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Home");
    this.metaService.addTag({ name: 'keyword', content: 'angular, angular for meta, angular for title' });
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
