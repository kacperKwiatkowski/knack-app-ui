import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeSiteComponent} from "./pages/home-site/home-site.component";
import {LoginSiteComponent} from "./pages/login-site/login-site.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";

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
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class HomeRoutingModule {
}
