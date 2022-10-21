import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {AppModule} from "../app.module";

@NgModule({
  declarations: [HeaderEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), AppModule],
  providers: [],
  exports: [
    HeaderEntryComponent
  ]
})
export class HeaderEntryModule {}
