import { Component, OnInit } from '@angular/core';
import { mockProductAndProductCategory } from 'src/app/mocks/product-and-product-category-dto-mock';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { ShoppingCartService } from '../../../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent implements OnInit {
  products: ProductAndProductCategory[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.products = this.shoppingCartService.getShoppingCart();
    
  }

  ngOnInit(): void {
    this.products = this.shoppingCartService.getShoppingCart();
  }
  incrementQuantity(product: ProductAndProductCategory) {
    this.shoppingCartService.incrementQuantity(product);
  }
  decrementQuantity(product: ProductAndProductCategory) {
    this.shoppingCartService.decrementQuantity(product);
  }
  placeOrder() {
    this.shoppingCartService.placeOrder();
  }
}
