import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param url api url after base url
   */
  get(url) { return this.http.get(BASE_URL + url) }
  post(url, data) { return this.http.post(BASE_URL + url, data) }
  put(url, data) { return this.http.put(BASE_URL + url, data) }
  delete(url) { return this.http.get(BASE_URL + url) }
}
