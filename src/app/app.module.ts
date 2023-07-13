import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {BannerComponent} from "./home/components/banner/banner.component";
import {CategorySelectorComponent} from "./home/components/category-selector/category-selector.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {PasswordStrengthDirective} from "./home/directives/password-strength.directive";
import {Only0neErrorPipe} from "./home/pipes/only-one-error.pipe";
import {RegisterFormComponent} from "./home/components/register-form/register-form.component";
import {LoginFormComponent} from "./home/components/login-form/login-form.component";
import {HomeSiteComponent} from "./home/pages/home-site/home-site.component";
import {LoginSiteComponent} from "./home/pages/login-site/login-site.component";
import {RegistrationSiteComponent} from "./home/pages/registration-site/registration-site.component";
import {PageNotFoundSiteComponent} from "./shared/pages/page-not-found-site/page-not-found-site.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategorySelectorComponent,
    FooterComponent,
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
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
