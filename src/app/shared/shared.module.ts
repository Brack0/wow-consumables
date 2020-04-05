import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedNewComponentsModule } from './new-components/shared-new-components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [SharedComponentsModule, SharedNewComponentsModule, PipesModule],
  exports: [SharedComponentsModule, SharedNewComponentsModule, PipesModule],
})
export class SharedModule {}
