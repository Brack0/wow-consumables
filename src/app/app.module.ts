import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConsumableComponent } from './consumable/consumable.component';
import { MaterialComponent } from './material/material.component';
import { SpecializationComponent } from './specialization/specialization.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
