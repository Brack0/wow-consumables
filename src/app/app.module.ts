import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Logger } from 'src/logger';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomRouteReuseStrategy } from './core/reuse-strategy';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    SharedModule,
    ShellModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
    { provide: Logger, useValue: new Logger(environment.logLevel) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
