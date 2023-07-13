import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginSiteComponent} from "./home/pages/login-site/login-site.component";
import {HomeSiteComponent} from "./home/pages/home-site/home-site.component";
import {RegisterFormComponent} from "./home/components/register-form/register-form.component";
import {PageNotFoundSiteComponent} from "./shared/pages/page-not-found-site/page-not-found-site.component";
import {CustomPreloadingStrategy} from "./home/services/custom-preloading.strategy";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "home",
    component: HomeSiteComponent
  }, {
    path: "login",
    component: LoginSiteComponent
  }, {
    path: "register",
    component: RegisterFormComponent
  }, {
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
