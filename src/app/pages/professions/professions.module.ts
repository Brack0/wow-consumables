import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionOldModule } from '../profession-old/profession-old.module';
import { ProfessionCraftsComponent } from './components/profession-crafts/profession-crafts.component';
import { ProfessionHomeComponent } from './components/profession-home/profession-home.component';
import { ProfessionNavComponent } from './components/profession-nav/profession-nav.component';
import { ProfessionRecipesComponent } from './components/profession-recipes/profession-recipes.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { ProfessionResolver } from './resolvers/profession.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ProfessionComponent,
    children: [
      {
        path: '',
        component: ProfessionHomeComponent,
      },
      {
        path: ':profession/crafts',
        component: ProfessionCraftsComponent,
        resolve: {
          profession: ProfessionResolver,
        },
      },
      {
        path: ':profession/recipes',
        component: ProfessionRecipesComponent,
        resolve: {
          profession: ProfessionResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ProfessionOldModule, // TODO : remove this
    MatExpansionModule,
    MatListModule,
  ],
  exports: [RouterModule],
  declarations: [
    ProfessionComponent,
    ProfessionRecipesComponent,
    ProfessionNavComponent,
    ProfessionCraftsComponent,
    ProfessionHomeComponent,
  ],
})
export class ProfessionsModule {}
