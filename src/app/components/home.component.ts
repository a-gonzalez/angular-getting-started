import { Component } from "@angular/core";

let home_component = {
	templateUrl: "./templates/home.component.html"
};

@Component(home_component)
export class HomeComponent
{
	public title: string = "Welcome";

	constructor()
	{
		console.info("HomeComponent ctor");
	}
}