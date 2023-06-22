import { Pipe, PipeTransform } from '@angular/core';
import { IPeople } from '../interfaces/people';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: IPeople[]): any {
    if(value){

      return value.sort( (a,b) => a.age - b.age );
    }
  }

}
