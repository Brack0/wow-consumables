import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profession-old',
    loadChildren: () =>
      import('./pages/profession-old/profession.module').then(
        (m) => m.ProfessionModule
      ),
  },
  {
    path: 'profession',
    loadChildren: () =>
      import('./pages/profession/profession.module').then(
        (m) => m.ProfessionModule
      ),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./pages/overview/overview.module').then((m) => m.OverviewModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
