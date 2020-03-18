import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { ConsumableGridComponent } from "./consumable-grid/consumable-grid.component";
import { ConsumableComponent } from "./consumable/consumable.component";
import { MaterialGridComponent } from "./material-grid/material-grid.component";
import { MaterialComponent } from "./material/material.component";
import { SpecializationComponent } from "./specialization/specialization.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSliderModule],
  exports: [
    ConsumableComponent,
    ConsumableGridComponent,
    MaterialComponent,
    MaterialGridComponent,
    SpecializationComponent
  ],
  declarations: [
    ConsumableComponent,
    ConsumableGridComponent,
    MaterialComponent,
    MaterialGridComponent,
    SpecializationComponent
  ]
})
export class SharedComponentsModule {}
