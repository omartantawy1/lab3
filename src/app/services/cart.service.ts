import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: any; quantity: number }[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  getCartCount() {
    return this.cartCountSubject.asObservable();
  }

  addToCart(product: any) {
    const existingCartItem = this.cartItems.find((item) => item.product === product);

    if (!existingCartItem) {
      this.cartItems.push({ product, quantity: 1 });
    } else {
      existingCartItem.quantity++;
    }

    this.updateCartCount();
  }

  removeFromCart(product: any) {
    const index = this.cartItems.findIndex((item) => item.product === product);

    if (index !== -1) {
      if (this.cartItems[index].quantity === 1) {
        this.cartItems.splice(index, 1);
      } else {
        this.cartItems[index].quantity--;
      }
      this.updateCartCount();
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  private updateCartCount() {
    const totalCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartCountSubject.next(totalCount);
  }
}
