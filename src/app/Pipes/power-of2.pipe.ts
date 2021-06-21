import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf2'
})
export class PowerOf2Pipe implements PipeTransform {

  transform(value:number): number {
   return (value*value);
  }

}
