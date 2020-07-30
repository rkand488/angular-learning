import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private form = new BehaviorSubject({});
  constructor() { }

  getform() {
    return this.form.asObservable();
  }

  setform(data: any) {
    this.form.next(data);
  }
}
