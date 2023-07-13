import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundSiteComponent} from "./shared/pages/page-not-found-site/page-not-found-site.component";
import {CustomPreloadingStrategy} from "./home/services/custom-preloading.strategy";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      preload: true
    }
  },
  {
    path: "basket",
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule),
    data: {
      preload: false
    }
  }, {
    path: "**",
    component: PageNotFoundSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule {
}
