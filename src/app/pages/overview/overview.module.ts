import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { OverviewComponent } from "./overview.component";

export const routes: Routes = [{ path: "", component: OverviewComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [OverviewComponent]
})
export class OverviewModule {}
