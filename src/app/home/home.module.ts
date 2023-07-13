import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AppComponent} from "../app.component";
import {HeaderComponent} from "../shared/layout/header/header.component";
import {BannerComponent} from "./components/banner/banner.component";
import {CategorySelectorComponent} from "./components/category-selector/category-selector.component";
import {FooterComponent} from "../shared/layout/footer/footer.component";
import {PasswordStrengthDirective} from "./directives/password-strength.directive";
import {Only0neErrorPipe} from "./pipes/only-one-error.pipe";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeSiteComponent} from "./pages/home-site/home-site.component";
import {LoginSiteComponent} from "./pages/login-site/login-site.component";
import {RegistrationSiteComponent} from "./pages/registration-site/registration-site.component";
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
    HomeSiteComponent,
    LoginSiteComponent,
    RegistrationSiteComponent,
    PageNotFoundSiteComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
