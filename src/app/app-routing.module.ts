import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginSiteComponent} from "./sites/login-site/login-site.component";
import {HomeSiteComponent} from "./sites/home-site/home-site.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {PageNotFoundSiteComponent} from "./sites/page-not-found-site/page-not-found-site.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },{
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
    loadChildren: () => import('./modules/basket/basket.module').then(m => m.BasketModule)
  }, {
    path: "**",
    component: PageNotFoundSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
