import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/./home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-site/login-page.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "home",
    component: HomePageComponent
  }, {
    path: "login",
    component: LoginPageComponent
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
