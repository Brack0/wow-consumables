import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ShellModule } from "src/app/shell/shell.module";
import { HomeComponent } from "./home.component";

export const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, ShellModule],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
