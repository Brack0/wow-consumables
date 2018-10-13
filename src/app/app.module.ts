import { OverlayModule } from '@angular/cdk/overlay';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSliderModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlchemyComponent } from './components/alchemy/alchemy.component';
import { ConsumableGridComponent } from './components/consumable-grid/consumable-grid.component';
import { ConsumableComponent } from './components/consumable/consumable.component';
import { CookingComponent } from './components/cooking/cooking.component';
import { MaterialGridComponent } from './components/material-grid/material-grid.component';
import { MaterialComponent } from './components/material/material.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SpecializationComponent } from './components/specialization/specialization.component';
import { CustomRouteReuseStrategy } from './reuse-strategy';
import { ComputeService, StateService } from './services';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { Home } from './shared/home/home';
import { Navbar } from './shared/navbar/navbar';
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
    Header,
    Home,
    Footer,
    Navbar
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
    StyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
