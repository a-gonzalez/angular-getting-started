import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "../internal/product.interface";

import { ProductService } from "../services/product.service";

let product_detail_component = {
  selector: "pm-product-detail",
  templateUrl: "./templates/product-detail.component.html",
  styleUrls: ["./styles/product-detail.component.css"]
};

@Component(product_detail_component)
export class ProductDetailComponent implements OnInit
{
  product: IProduct;
  heading: string = "Product: ";
  message_error: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService)
  {
    console.info("ProductDetailComponent ctor - %s", this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit()
  {
    console.info("ProductDetailComponent OnInit");

    const param = this.route.snapshot.paramMap.get("id");

    if (param)
    {
      const id = +param;

      this.getProduct(id);
    }
  }

  getProduct(id: number)
  {
    console.info("ProductDetailComponent getProduct");

    this.service.getProduct(id).subscribe(product =>
    {
      this.product = product;
      this.heading += this.product.Name;
    },
    error =>
    {
      this.message_error = <any>error;
    });
  }

  onBack(): void
  {
    this.router.navigate(["/products"]);
  }
}
