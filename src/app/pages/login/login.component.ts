import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = '';
  submitted: boolean = false;
  form: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (this.f.username.value == 'abcd' && this.f.password.value == '1234') {
        localStorage.setItem('login', this.form.value.username);
        this.message = '';
        this.router.navigateByUrl("/admin");
      } else {
        this.message = "Invalide credential!";
      }

    }
  }

}
