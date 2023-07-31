import { Component, OnInit } from '@angular/core';
import { mockProductAndProductCategoryDto } from 'src/app/mocks/product-and-product-category-dto-mock';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent implements OnInit {
  products :ProductAndProductCategoryDto[]=mockProductAndProductCategoryDto;

  ngOnInit(): void {
    this.products = this.products.map((product: ProductAndProductCategoryDto) => {
      if (product.quantity == undefined) {
      return {...product, quantity: 1}
      }
      else return product;
    })
    console.log(this.products)
  }
}
