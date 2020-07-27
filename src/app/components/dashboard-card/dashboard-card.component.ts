import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input() cardClass: string;
  @Input() cardTitle: string;

  @Output() changeText = new EventEmitter<string>();

  classess: string = 'bg-info text-white';
  text: string = 'title';
  constructor() { }

  ngOnInit(): void {
    if (this.cardClass) {
      this.classess = this.cardClass;
    }
    if (this.cardTitle) {
      this.text = this.cardTitle;
    }
  }

  changeTxt() {
    this.changeText.emit("card clicked");
  }

}
