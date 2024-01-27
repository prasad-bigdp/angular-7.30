import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad'
})
export class PrasadPipe implements PipeTransform {

  transform(value: string, v1:string): unknown {
    if (value.trim() == "")
    {
      return "emptyy"+v1
    }
    else {
          return value.split('')+v1;
    }
  }

}
