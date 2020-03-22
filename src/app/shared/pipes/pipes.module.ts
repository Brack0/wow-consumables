import { NgModule } from '@angular/core';
import { ContentFullNamePipe } from './content-fullname.pipe';

@NgModule({
  declarations: [ContentFullNamePipe],
  exports: [ContentFullNamePipe],
})
export class PipesModule { }
