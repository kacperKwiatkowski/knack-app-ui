import { NgModule } from '@angular/core';
import {BasketSiteComponent} from "./basket-site/basket-site.component";
import {BasketRoutingModule} from "./basket-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    BasketSiteComponent
  ],
  imports: [
    SharedModule,
    BasketRoutingModule,
  ]
})
export class BasketModule { }
