import {NgModule} from "@angular/core";
import {BasketPageComponent} from "./basket-page/basket-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: BasketPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class BasketRoutingModule {}
