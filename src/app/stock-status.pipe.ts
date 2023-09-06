import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {
  
  transform(stock: number) {
    if (stock === 0) {
      return 'Out of Stock';
    } else {
      return 'In Stock';
    }
  }
}
