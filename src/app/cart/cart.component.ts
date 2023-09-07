import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: { product: any; quantity: number }[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  decrementQuantity(item: { product: any; quantity: number }) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: { product: any; quantity: number }) {
    item.quantity++;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems(); 
  }
}





