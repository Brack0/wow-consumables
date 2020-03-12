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
import {
  AlchemyComponent,
  CookingComponent,
  HomeComponent,
  OverviewComponent
} from "./pages";
import { CustomRouteReuseStrategy } from "./reuse-strategy";
import { ComputeService, StateService, ThemeStorage } from "./services";
import { StyleService } from "./services/style.service";
import { SharedModule } from "./shared/shared.module";
import { ShellModule } from "./shell/shell.module";

@NgModule({
  declarations: [
    AlchemyComponent,
    AppComponent,
    CookingComponent,
    OverviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    OverlayModule,
    SharedModule,
    ShellModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    StateService,
    ComputeService,
    StyleService,
    ThemeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
