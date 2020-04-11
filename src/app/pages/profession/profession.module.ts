import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionRecipesComponent } from './components/profession-recipes/profession-recipes.component';
import { ProfessionResolver } from './resolvers/profession.resolver';

export const routes: Routes = [
  {
    path: ':profession/recipes',
    component: ProfessionRecipesComponent,
    resolve: {
      profession: ProfessionResolver,
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [ProfessionRecipesComponent],
})
export class ProfessionModule {}
