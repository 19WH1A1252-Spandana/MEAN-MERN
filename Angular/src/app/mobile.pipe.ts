import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {
     country : any;
  transform(value: any, country : any): any
   {
          if(country === 'India')
          {
            return '+91' +value;
          }
          else if(country === 'USA')
          {
            return '+1' +value;
          }
          else if(country === 'Australia')
          {
            return '+61' +value;
          }
    
  }

}