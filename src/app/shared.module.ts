import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./components/star.component";

let shared_module = {
	declarations: [
		StarComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		StarComponent,
		CommonModule,
		FormsModule
	],
	providers: [

	],
	bootstrap: [

	]
};

@NgModule(shared_module)
export class SharedModule
{
	constructor()
	{
		console.info("SharedModule ctor");
	}
}