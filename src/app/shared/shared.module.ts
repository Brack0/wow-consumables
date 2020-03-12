import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";

@NgModule({
  imports: [SharedComponentsModule],
  exports: [SharedComponentsModule]
})
export class SharedModule {}
