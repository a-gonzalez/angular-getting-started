import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { IProduct } from "../internal/product.interface";

@Injectable()
export class ProductService
{
	private url: string = "./assets/data/products.json";

	constructor(private http: HttpClient)
	{
		console.info("ProductService ctor...");
	}

	getProducts(): Observable<IProduct[]>
	{
		return this.http.get<IProduct[]>(this.url)
			.do(data => console.log("Data: %s", JSON.stringify(data)))
			.catch(this.ErrorHandler);
	}

	getProduct(id: number): Observable<IProduct>
	{
		return this.getProducts()
			.map((products: IProduct[]) => products.find(product => product.ID == id));
	}

	private ErrorHandler(her: HttpErrorResponse)//: Observable<HttpErrorResponse>
	{
		let message = "";

		if (her.error instanceof Error)
		{// a client-side or network error
			message = `An error occured: ${her.error.message}`;
		}
		else
		{// the backend returned an unsuccessful response
			message = 'Server returned code: ${her.status}, with message: ${her.message}';
		}
		console.error(message);

		return Observable.throw(message);
	}
}