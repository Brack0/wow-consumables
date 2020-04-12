import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times',
})
export class TimesPipe implements PipeTransform {
  transform(value: number, active: boolean = true): string {
    if (active) {
      return `x${value}`;
    }
    return value.toString();
  }
}
