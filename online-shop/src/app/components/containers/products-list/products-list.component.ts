import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/types/products.types';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { mockProductAndProductCategory } from 'src/app/mocks/product-and-product-category-dto-mock';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit, OnChanges {
  products: ProductAndProductCategory[] = [];
  isAdmin:boolean=false;
  constructor(private productService: ProductService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.reloadPage();
    this.isAdmin=this.productService.isAdmin();
  }

  ngOnInit(): void {
    this.reloadPage();
    this.productService.authProfile();
  }

  reloadPage(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: ProductAndProductCategory) {
    this.productService.addToShoppingCart(product);
  }

  logOut(){
    this.productService.logOut();
  }

}
