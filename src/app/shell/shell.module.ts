import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatGridListModule,
  MatIconModule,
  MatMenuModule
} from "@angular/material";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ResetComponent } from "./reset/reset.component";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector.component";

@NgModule({
  imports: [CommonModule, MatGridListModule, MatIconModule, MatMenuModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ResetComponent,
    ThemeSelectorComponent
  ]
})
export class ShellModule {}
