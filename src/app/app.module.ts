import { OverlayModule } from "@angular/cdk/overlay";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomRouteReuseStrategy } from "./core/reuse-strategy";
import { SharedModule } from "./shared/shared.module";
import { ShellModule } from "./shell/shell.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    OverlayModule,
    SharedModule,
    ShellModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
