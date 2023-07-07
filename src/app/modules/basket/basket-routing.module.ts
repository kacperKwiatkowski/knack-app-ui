import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BasketSiteComponent} from "./basket-site/basket-site.component";

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
