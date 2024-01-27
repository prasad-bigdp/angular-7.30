import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOdd'
})
export class EvenOddPipe implements PipeTransform {

  transform(value: number, flag: boolean): string {
    if (flag) {
         if (value % 2 == 0) return value + ' is even';
         else return value + 'is odd';
    }
    else return ""
 
  }

}
