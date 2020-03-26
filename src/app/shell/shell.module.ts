import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { GithubLogoComponent } from './components/github-logo/github-logo.component';
import { HeaderComponent } from './components/header/header.component';
import { ResetComponent } from './components/reset/reset.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ContentFullNamePipe } from './pipes/content-fullname.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    FullPageComponent,
    GithubLogoComponent,
    HeaderComponent,
    ResetComponent,
    ThemeSelectorComponent,
    ContentFullNamePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  exports: [FullPageComponent],
})
export class ShellModule {}
