import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PipesModule } from '../pipes/pipes.module';
import { CategoryComponent } from './category/category.component';
import { MaterialComponent } from './material/material.component';
import { RankSelectorComponent } from './rank-selector/rank-selector.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    MaterialComponent,
    RecipeComponent,
    RankSelectorComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, PipesModule, MatChipsModule],
  exports: [
    CategoryComponent,
    MaterialComponent,
    RankSelectorComponent,
    RecipeComponent,
  ],
})
export class SharedNewComponentsModule {}
