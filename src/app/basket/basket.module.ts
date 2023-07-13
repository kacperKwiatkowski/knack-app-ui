import { NgModule } from '@angular/core';
import {BasketPageComponent} from "./basket-page/basket-page.component";
import {BasketRoutingModule} from "./basket-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    BasketPageComponent
  ],
  imports: [
    SharedModule,
    BasketRoutingModule,
  ]
})
export class BasketModule { }
