import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _user = new BehaviorSubject({});
  $user = this._user.asObservable();
  constructor(private http: HttpClient) {
    var token = localStorage.getItem("token");
    if (token) {
      this.auth_get(`me?token=${token}`).subscribe((res: any) => {
        this._user.next(res);
      });
    }
  }

  private setHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token') // must be defined in backend header for authentication
      })
    };
  }
  private setFormHeader() {
    return {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
      })
    };
  }
  /**
   * 
   * @param url api url after base url
   */
  get(url) { return this.http.get(BASE_URL + url) }
  post(url, data) { return this.http.post(BASE_URL + url, data) }
  put(url, data) { return this.http.put(BASE_URL + url, data) }
  delete(url) { return this.http.get(BASE_URL + url) }

  auth_get(url) { return this.http.get(BASE_URL + url, this.setHeader()) }
  auth_post(url, data) { return this.http.post(BASE_URL + url, this.setHeader(), data) }
  auth_form_post(url, data) { return this.http.post(BASE_URL + url, this.jsontoform(data), this.setFormHeader()) }

  private jsontoform(data) {
    const formData = new FormData();
    if (Object.keys(data).length > 0) {
      for (var key in data) {
        if (Array.isArray(data[key])) {
          data[key].forEach((v, i) => {
            var vl = v;
            if (typeof v !== "string") {
              vl = JSON.stringify(vl);
            }
            formData.append(key + '[' + i + ']', vl);
          });
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    return formData
  }
}
