import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [SharedComponentsModule, PipesModule],
  exports: [SharedComponentsModule, PipesModule],
})
export class SharedModule {}
