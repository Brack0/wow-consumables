import { Pipe, PipeTransform } from '@angular/core';
import { Content } from 'src/app/new-model/content.model';

@Pipe({
  name: 'contentFullname',
})
export class ContentFullNamePipe implements PipeTransform {
  transform(value: Content): string {
    return (
      value.patch +
      '\nLast updated : ' +
      new Date(value.releaseDate).toLocaleDateString()
    );
  }
}
