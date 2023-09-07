import { Component,Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})

export class ProductsCardComponent {
  @Input() product!: Product;
 

  constructor(private router: Router, private cartService: CartService) {}

  redirectToDetails(id: string) {
    this.router.navigate(['product-details', id]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

 
}
