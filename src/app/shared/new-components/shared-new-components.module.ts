import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [CommonModule, PipesModule],
  exports: [MaterialComponent],
})
export class SharedNewComponentsModule {}
