import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [SidebarEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
  exports: [
    SidebarEntryComponent
  ]
})
export class SidebarEntryModule {}
