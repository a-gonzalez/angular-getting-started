import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { IProduct } from "../internal/product.interface";
import { ProductService } from "../services/product.service";

let product_list_component = {
	templateUrl: "./templates/product-list.component.html",
	styleUrls: ["./styles/product-list.component.css"]
};

@Component(product_list_component)
export class ProductListComponent implements OnInit
{
	heading: string = "Product List";
	image_width: number = 50;
	image_margin: number = 2;
	image_show: boolean = true;
	message_error: string;
	
	products: IProduct[];

	constructor(private service: ProductService)
	{
		console.info("ProductListComponent ctor...");

		//this.products_filtered = this.products;
		//this.products_filtered = service.getProducts();
		//this.Filter = "";
	}

	_filter: string;
	get Filter(): string
	{
		console.info("get %s", this._filter);

		return this._filter;
	}

	set Filter(value: string)
	{
		console.info("set %s", value);

		this._filter = value;
		this.products_filtered = this._filter ? this.processFilter(this._filter) : this.products;
	}
	products_filtered: IProduct[];

	processFilter(filter: string): IProduct[]
	{
		console.info("performFilter %s", filter);

		filter = filter.toLocaleLowerCase();

		return this.products.filter((product: IProduct) =>
			product.Name.toLocaleLowerCase().indexOf(filter) !== -1);
	}

	toggleImage(): void
	{
		this.image_show = !this.image_show;
	}

	ngOnInit(): void
	{
		console.info("ProductListComponent OnInit...");

		this.service.getProducts()
					.subscribe(products =>
					{
						this.products = products;
						this.products_filtered = this.products;
					},
					error =>
					{
						this.message_error = <any>error
					});
		this.Filter = "";
	}

	onNotify(message: string): void
	{
		console.log(message);

		this.heading = "Product List: " + message;
	}
}