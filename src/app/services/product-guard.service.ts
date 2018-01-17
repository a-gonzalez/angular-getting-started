import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate
{
	constructor(private router: Router)
	{
		console.info("ProductGuardService ctor");
	}

	canActivate(route: ActivatedRouteSnapshot): boolean
	{
		let id = +route.url[1].path;
		let result = true;

		if (isNaN(id) || (id < 1))
		{
			alert("Invalid product ID");

			this.router.navigate(["/products"]);
			result = false;
		}
		return result;
	}
}