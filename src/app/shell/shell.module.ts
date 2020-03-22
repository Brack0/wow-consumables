import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetComponent } from './components/reset/reset.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { StyleService } from './services/style.service';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    SharedModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent,
  ],
  providers: [StyleService],
})
export class ShellModule {}
