import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {
  
  transform(stock: number): string {
    if (stock === 0) {
      return 'Out of Stock';
    } else if (stock > 0) {
      return 'In Stock';
    } else {
      return 'Invalid Stock';
    }
  }
}
