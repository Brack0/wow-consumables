import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlchemyComponent } from './components/alchemy/alchemy.component';
import { CookingComponent } from './components/cooking/cooking.component';

export const routes: Routes = [
  { path: 'alchemy', component: AlchemyComponent },
  { path: 'cooking', component: CookingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [AlchemyComponent, CookingComponent],
})
export class ProfessionModule {}
