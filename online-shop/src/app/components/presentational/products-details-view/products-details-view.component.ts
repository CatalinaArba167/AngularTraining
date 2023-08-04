import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  @Input() product: ProductAndProductCategory | undefined;
  @Input()isAdmin!:boolean
  @Output() deleteProductEventEmitter = new EventEmitter<string>();
  
  deleteProduct(productId: string):  void {
    if (this.product && window.confirm('Are you sure you want to delete this product?')) {
      this.deleteProductEventEmitter.emit(productId);
    }
  }
}
