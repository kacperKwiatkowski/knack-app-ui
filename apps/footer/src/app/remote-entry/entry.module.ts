import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import {AppModule} from "../app.module";
import {FooterEntryComponent} from "./entry.component";

@NgModule({
  declarations: [FooterEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), AppModule],
  providers: [],
  exports: [
    FooterEntryComponent
  ]
})
export class FooterEntryModule {}
