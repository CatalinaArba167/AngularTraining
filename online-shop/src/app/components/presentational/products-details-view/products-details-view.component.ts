import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input()  product :ProductAndProductCategoryDto | undefined;


}
