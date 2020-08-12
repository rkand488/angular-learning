import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (typeof value == "object") {
      return (value.hasOwnProperty("subject")) ? value.subject.map(x => x.name).join(',') : "";
    } else {
      console.error("value must be object!");
    }
  }

}
