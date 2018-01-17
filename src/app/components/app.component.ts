import { Component } from "@angular/core";

let app_component = {
  selector: "pm-root",
  templateUrl: "./templates/app.component.html",
  styleUrls: ["./styles/app.component.css"],
  providers: []
};

@Component(app_component)
export class AppComponent
{
  heading: string = "ACME Product Management";
  
  constructor()
  {
    console.info("AppComponent ctor...");
  }
}