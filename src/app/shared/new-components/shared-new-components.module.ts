import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PipesModule } from '../pipes/pipes.module';
import { CategoryComponent } from './category/category.component';
import { MaterialComponent } from './material/material.component';
import { RankSelectorComponent } from './rank-selector/rank-selector.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SpecializationComponent } from './specialization/specialization.component';

@NgModule({
  declarations: [
    CategoryComponent,
    MaterialComponent,
    RecipeComponent,
    RankSelectorComponent,
    SpecializationComponent,
  ],
  imports: [CommonModule, PipesModule, MatChipsModule],
  exports: [
    CategoryComponent,
    MaterialComponent,
    RankSelectorComponent,
    RecipeComponent,
    SpecializationComponent,
  ],
})
export class SharedNewComponentsModule {}
