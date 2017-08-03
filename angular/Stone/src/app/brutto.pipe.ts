import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(value: number, tax = 19): any {
    return value * (1 + tax / 100);
  }

}
