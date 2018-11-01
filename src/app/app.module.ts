import { OverlayModule } from '@angular/cdk/overlay';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ConsumableComponent,
  ConsumableGridComponent,
  MaterialComponent,
  MaterialGridComponent,
  SpecializationComponent
} from './components/elements';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  ResetComponent,
  ThemeSelectorComponent
} from './components/global';
import {
  AlchemyComponent,
  CookingComponent,
  HomeComponent,
  OverviewComponent
} from './components/pages';
import { CustomRouteReuseStrategy } from './reuse-strategy';
import { ComputeService, StateService, ThemeStorage } from './services';
import { StyleService } from './services/style.service';

@NgModule({
  declarations: [
    AlchemyComponent,
    AppComponent,
    ConsumableComponent,
    ConsumableGridComponent,
    CookingComponent,
    MaterialComponent,
    MaterialGridComponent,
    OverviewComponent,
    SpecializationComponent,
    ThemeSelectorComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatTooltipModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    StateService,
    ComputeService,
    StyleService,
    ThemeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
