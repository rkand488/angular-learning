import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  text: string = "";
  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { name: "rakesh", time: new Date() },
      { name: "rakesh2", time: new Date() },
      { name: "rakesh3", time: new Date() }
    ]
  }

  addtodo() {
    if (this.text != "") {
      var date = new Date();
      this.items.push({ name: this.text, time: date });
      this.text = "";
    }
  }

}
