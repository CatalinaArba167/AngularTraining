import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input()  productList :ProductAndProductCategoryDto[] | undefined;

  constructor(private router: Router) {}

  public onCheckoutButtonClick(){
    console.log("Checkout");
  }
  public onClickBackToProductsList(){
    this.router.navigate(['/']);
  }
  public incrementQuantity(product:ProductAndProductCategoryDto):void {
    if(product.quantity)
      product.quantity=product.quantity+1;
  }
  public decrementQuantity(product:ProductAndProductCategoryDto):void {
    if(product.quantity && product.quantity>1)
      product.quantity=product.quantity-1;
  }
}
