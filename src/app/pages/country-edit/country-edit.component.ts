import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

  id: string;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private actRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      code: ['']
    });
    this.actRoute.params.subscribe((res: any) => {
      this.id = res.id;
    });

    this.api.get('country/' + this.id).subscribe((res: any) => {
      this.form.get('code').setValue(res.code);
      this.form.get('name').setValue(res.name);
    });
  }

  save() {
    this.api.put('country/' + this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/admin/country');
    });
  }

}
