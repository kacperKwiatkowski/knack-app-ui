import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from "./components/banner/banner.component";
import {CategorySelectorComponent} from "./components/category-selector/category-selector.component";
import {FooterComponent} from './components/footer/footer.component';
import {LoginFormComponent} from "./components/login-form/login-form.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {PasswordStrengthDirective} from "./directives/password-strength.directive";
import {Only0neErrorPipe} from "./pipes/only-one-error.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategorySelectorComponent,
    FooterComponent,
    LoginFormComponent,
    PasswordStrengthDirective,
    Only0neErrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
