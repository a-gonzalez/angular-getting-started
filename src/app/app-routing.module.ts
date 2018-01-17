import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home.component";

let app_routing_module = {
	imports: [
		RouterModule.forRoot([
			{
				path: "home",
				component: HomeComponent
			},
			{
				path: "",
				redirectTo: "home",
				pathMatch: "full"
			},
			{
				path: "**",
				redirectTo: "home",
				pathMatch: "full"
			}
		], { useHash: true })
	],
	exports: [
		RouterModule
	]
};

@NgModule(app_routing_module)
export class AppRoutingModule
{
	constructor()
	{
		console.info("AppRoutingModule ctor");
	}
}