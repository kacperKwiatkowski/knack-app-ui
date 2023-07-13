import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
