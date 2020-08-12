import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  country: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('country').subscribe((res: any) => {
      this.country = res;
      // console.log(res);
    });
  }

}
