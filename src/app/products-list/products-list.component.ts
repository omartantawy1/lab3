import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent  {
  products: any;
  loader: boolean = false;
  constructor(
    private productsService: ProductsService,
   
  ) {}

  ngOnInit() {
    this.loader = true;
    this.productsService.getProductsList().subscribe({
      next: (data) => {
        this.products = data.products;
        this.loader = false;
      },
      error: (error) => {
        console.log(error);
        this.loader = false;
      }
    });

  
  }
}