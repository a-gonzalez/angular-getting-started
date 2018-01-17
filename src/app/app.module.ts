import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ProductModule } from "./product.module";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./components/home.component";
import { AppComponent } from "./components/app.component";

let app_module = {
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
}

@NgModule(app_module)
export class AppModule
{
  constructor()
  {
    console.info("AppModule ctor");
  }
}
