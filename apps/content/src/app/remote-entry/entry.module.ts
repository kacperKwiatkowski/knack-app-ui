import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {AppModule} from "../app.module";

@NgModule({
    declarations: [RemoteEntryComponent],
    imports: [CommonModule, RouterModule.forChild(remoteRoutes), AppModule],
    providers: [],
    exports: [
        RemoteEntryComponent
    ]
})
export class ContentEntryModule {}
