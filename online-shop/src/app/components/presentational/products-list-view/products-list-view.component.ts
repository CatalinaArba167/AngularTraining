import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() productList: ProductAndProductCategory[] | undefined;
  @Output() addToCartEventEmitter =
    new EventEmitter<ProductAndProductCategory>();
  @Output() logOutEvent =
    new EventEmitter<null>();

  addToCart(product: ProductAndProductCategory): void {
    this.addToCartEventEmitter.emit(product);
  }
  logOut(){
    this.logOutEvent.emit();
  }

}
