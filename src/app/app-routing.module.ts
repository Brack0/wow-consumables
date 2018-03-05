import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlchemyComponent } from 'app/components/alchemy/alchemy.component';
import { CookingComponent } from 'app/components/cooking/cooking.component';
import { OverviewComponent } from 'app/components/overview/overview.component';
import { Home } from 'app/shared/home/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
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
