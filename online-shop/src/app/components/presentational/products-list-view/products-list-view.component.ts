import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent {
  @Input()  productList :ProductAndProductCategoryDto[] | undefined;

  constructor(private router: Router) {
  }



  showProductDetails(ProductAndProductCategoryDto: ProductAndProductCategoryDto): void {
    const navigationExtras: NavigationExtras = {
      state: {
        ProductAndProductCategoryDto: ProductAndProductCategoryDto,
      },
    };
    this.router.navigate(['/details', ProductAndProductCategoryDto.productId], navigationExtras);
  }
}
