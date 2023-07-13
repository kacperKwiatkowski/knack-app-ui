import {NgModule} from "@angular/core";
import {BasketSiteComponent} from "./basket-site/basket-site.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: BasketSiteComponent
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
