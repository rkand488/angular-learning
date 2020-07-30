import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  text: string = "";
  items: any = [];
  formdata: any = {};
  constructor(private formservice: FormService) { }

  ngOnInit(): void {
    this.formservice.getform().subscribe((res: any) => {
      this.formdata = res;
    });
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
