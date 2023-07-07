import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketSiteComponent} from "./basket-site/basket-site.component";
import {BasketRoutingModule} from "./basket-routing.module";

@NgModule({
  declarations: [
    BasketSiteComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
