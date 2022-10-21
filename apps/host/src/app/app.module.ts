import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent2 } from './nx-welcome.component2';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent2],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
