import { Component,Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {
  @Input() product !: Product ;
 

  constructor(private router: Router){

  }

  redirectToDetails(id : string){ 
    this.router.navigate(['game-details' , id])
  }
  
}
