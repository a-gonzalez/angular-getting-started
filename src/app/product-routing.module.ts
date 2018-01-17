import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./components/product-list.component";
import { ProductDetailComponent } from "./components/product-detail.component";

import { ProductGuardService } from "./services/product-guard.service";

let product_routing_module = {
	imports: [
		RouterModule.forChild([
			{
				path: "products",
				component: ProductListComponent
			},
			{
				path: "products/:id",
				canActivate: [
					ProductGuardService
				],
				component: ProductDetailComponent
			}
		])
	],
	exports: [
		RouterModule
	]
};

@NgModule(product_routing_module)
export class ProductRoutingModule
{
	constructor()
	{
		console.info("ProductRoutingModule ctor");
	}
}