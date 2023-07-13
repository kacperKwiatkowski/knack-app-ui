import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AppComponent} from "../app.component";
import {HeaderComponent} from "../core/layout/header/header.component";
import {BannerComponent} from "./components/banner/banner.component";
import {CategorySelectorComponent} from "./components/category-selector/category-selector.component";
import {FooterComponent} from "../core/layout/footer/footer.component";
import {PasswordStrengthDirective} from "../shared/directives/password-strength.directive";
import {Only0neErrorPipe} from "../shared/pipes/only-one-error.pipe";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomePageComponent} from "./pages/./home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-site/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-site/registration-page.component";
import {PageNotFoundSiteComponent} from "../shared/pages/page-not-found-site/page-not-found-site.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [
    BannerComponent,
    CategorySelectorComponent,
    PasswordStrengthDirective,
    Only0neErrorPipe,
    RegisterFormComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    PageNotFoundSiteComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
