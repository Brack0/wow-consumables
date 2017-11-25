import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'app/app-routing.module';

import { Home } from 'app/shared/home/home';
import { Navbar } from 'app/shared/navbar/navbar';

import { AppComponent } from 'app/app.component';
import { AlchemyComponent } from 'app/components/alchemy/alchemy.component';
import { ConsumableComponent } from 'app/components/consumable/consumable.component';
import { MaterialComponent } from 'app/components/material/material.component';
import { SpecializationComponent } from './components/specialization/specialization.component';

import { ComputeService } from 'app/services/compute.service';
import { StateService } from 'app/services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsumableComponent,
    MaterialComponent,
    SpecializationComponent,
    AlchemyComponent,
    Navbar,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
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
