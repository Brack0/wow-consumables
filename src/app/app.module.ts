import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConsumableComponent } from './components/consumable/consumable.component';
import { MaterialComponent } from './components/material/material.component';
import { SpecializationComponent } from './components/specialization/specialization.component';
import { ComputeService } from './services/compute.service';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsumableComponent,
    MaterialComponent,
    SpecializationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [StateService, ComputeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
