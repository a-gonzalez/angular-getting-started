import { NgModule } from "@angular/core";

import { SharedModule } from "./shared.module";
import { ProductRoutingModule } from "./product-routing.module";

import { ConvertToSpacesPipe } from "./pipes/convert-to-spaces.pipe";
import { ProductService } from "./services/product.service";
import { ProductGuardService } from "./services/product-guard.service";

import { ProductListComponent } from "./components/product-list.component";
import { ProductDetailComponent } from "./components/product-detail.component";

let product_module = {
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		ConvertToSpacesPipe
	],
	imports: [
		ProductRoutingModule,
		SharedModule
	],
	providers: [
		ProductService,
		ProductGuardService
	]
};

@NgModule(product_module)
export class ProductModule
{
	constructor()
	{
		console.info("ProductModule ctor");
	}
}
