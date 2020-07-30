import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  message: string = '';
  submitted: boolean = false;
  form: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router, private formservice: FormService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      // console.info(this.form.value);
      this.formservice.setform(this.form.value);
      this.router.navigateByUrl("/admin/form-show");
    }
  }

}
