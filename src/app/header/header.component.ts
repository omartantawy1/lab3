import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount: number=0; 

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
  }
}
