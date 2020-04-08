import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialComponent } from './material/material.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [MaterialComponent, RecipeComponent],
  imports: [CommonModule, PipesModule],
  exports: [MaterialComponent, RecipeComponent],
})
export class SharedNewComponentsModule {}
