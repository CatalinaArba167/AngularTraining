import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() productList: ProductAndProductCategory[] | undefined;
  @Output() incrementQuantityEventEmitter =
    new EventEmitter<ProductAndProductCategory>();
  @Output() decrementQuantityEventEmitter =
    new EventEmitter<ProductAndProductCategory>();
  @Output() placeOrderEventEmitter =
    new EventEmitter<any>();


  public onCheckoutButtonClick() {
    console.log('Checkout');
  }
  public incrementQuantity(product: ProductAndProductCategory): void {
    this.incrementQuantityEventEmitter.emit(product);
  }
  public decrementQuantity(product: ProductAndProductCategory): void {
    this.decrementQuantityEventEmitter.emit(product);
  }

  public placeOrder(){
    if ( window.confirm('Are you sure you want to checkout?')) {
    this.placeOrderEventEmitter.emit();

    }
  }
}
