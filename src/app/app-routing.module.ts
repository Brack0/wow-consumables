import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlchemyComponent } from 'app/components/alchemy/alchemy.component';

const routes: Routes = [
  { path: '', redirectTo: '/alchemy', pathMatch: 'full' },
  { path: 'alchemy', component: AlchemyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
