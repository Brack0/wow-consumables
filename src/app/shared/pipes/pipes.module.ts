import { NgModule } from '@angular/core';
import { SpecializationIconPipe } from './specialization-icon/specialization-icon.pipe';
import { TimesPipe } from './times/times.pipe';

@NgModule({
  declarations: [SpecializationIconPipe, TimesPipe],
  exports: [SpecializationIconPipe, TimesPipe],
})
export class PipesModule {}
