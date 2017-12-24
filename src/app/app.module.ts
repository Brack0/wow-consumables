import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatSliderModule,
  MatTabsModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'app/app-routing.module';

import { Footer } from 'app/shared/footer/footer';
import { Header } from 'app/shared/header/header';
import { Home } from 'app/shared/home/home';
import { Navbar } from 'app/shared/navbar/navbar';

import { AppComponent } from 'app/app.component';
import { AlchemyComponent } from 'app/components/alchemy/alchemy.component';
import { ConsumableComponent } from 'app/components/consumable/consumable.component';
import { MaterialComponent } from 'app/components/material/material.component';
import { SpecializationComponent } from './components/specialization/specialization.component';

import { ComputeService } from 'app/services/compute.service';
import { StateService } from 'app/services/state.service';
import { CookingComponent } from './components/cooking/cooking.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumableComponent,
    MaterialComponent,
    SpecializationComponent,
    AlchemyComponent,
    Header,
    Home,
    Footer,
    Navbar,
    CookingComponent
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
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/wow-consumables' },
    StateService,
    ComputeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
