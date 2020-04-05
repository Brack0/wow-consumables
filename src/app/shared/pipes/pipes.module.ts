import { NgModule } from '@angular/core';
import { TimesPipe } from './times/times.pipe';

@NgModule({
  declarations: [TimesPipe],
  exports: [TimesPipe],
})
export class PipesModule {}
