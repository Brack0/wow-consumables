import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetComponent } from './components/reset/reset.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { StyleService } from './services/style.service';
import { ThemeStorageService } from './services/theme-storage.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent,
  ],
  providers: [StyleService, ThemeStorageService],
})
export class ShellModule {}
