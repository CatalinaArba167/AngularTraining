import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { mockProductAndProductCategoryDto } from 'src/app/mocks/product-and-product-category-dto-mock';
import { product } from 'src/app/mocks/product-detail.mocks';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  product: ProductAndProductCategoryDto | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.product = navigation.extras.state['ProductAndProductCategoryDto'];
    }
  }

}
