import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-formshow',
  templateUrl: './formshow.component.html',
  styleUrls: ['./formshow.component.css']
})
export class FormshowComponent implements OnInit {

  formdata: any = {};
  constructor(private formservice: FormService) { }

  ngOnInit(): void {
    this.formservice.getform().subscribe((res: any) => {
      console.log(res);
      this.formdata = res;
    });
  }

}
