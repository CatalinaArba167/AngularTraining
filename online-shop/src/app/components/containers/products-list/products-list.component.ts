import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategoryDto } from 'src/app/types/productsAndProductsCategoryDto';
import { mockProductAndProductCategoryDto } from 'src/app/mocks/product-and-product-category-dto-mock';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products :ProductAndProductCategoryDto[]=mockProductAndProductCategoryDto;
  constructor(private http: HttpClient) {}
}
