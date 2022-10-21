import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "../app-routing.module";
import {HeaderEntryModule} from "../../../header/src/app/remote-entry/entry.module";
import {SidebarEntryModule} from "../../../sidebar/src/app/remote-entry/entry.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderEntryModule,
    SidebarEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
