import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AlchemyComponent,
  CookingComponent,
  HomeComponent,
  OverviewComponent
} from './components/pages';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alchemy', component: AlchemyComponent },
  { path: 'cooking', component: CookingComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
