import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specializationIcon',
})
export class SpecializationIconPipe implements PipeTransform {
  transform(value: string): string {
    return `assets/images/specializations/${value.toLowerCase()}.svg`;
  }
}
