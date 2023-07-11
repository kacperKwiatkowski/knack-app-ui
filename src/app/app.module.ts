import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {BannerComponent} from "./components/banner/banner.component";
import {CategorySelectorComponent} from "./components/category-selector/category-selector.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PasswordStrengthDirective} from "./directives/password-strength.directive";
import {Only0neErrorPipe} from "./pipes/only-one-error.pipe";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeSiteComponent} from "./sites/home-site/home-site.component";
import {LoginSiteComponent} from "./sites/login-site/login-site.component";
import {RegistrationSiteComponent} from "./sites/registration-site/registration-site.component";
import {PageNotFoundSiteComponent} from "./sites/page-not-found-site/page-not-found-site.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
