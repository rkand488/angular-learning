import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: any = [];
  user: any = {};
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.$user.subscribe((res: any) => {
      this.user = res;
    });
    this.cards = [
      { class: 'bg-primary text-white', name: 'Primary card' },
      { class: 'bg-success text-white', name: 'Success card' },
      { class: 'bg-info text-white', name: 'Info card' },
      { class: 'bg-warning text-white', name: 'Warning card' }
    ];
  }

  clickCard(message) {
    alert(message);
  }

}
