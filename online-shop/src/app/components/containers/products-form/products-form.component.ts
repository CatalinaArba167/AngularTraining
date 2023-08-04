import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html'
})
export class ProductsFormComponent implements OnInit {
  productId!:string|null  ;
  product: ProductAndProductCategory | undefined;
  operation?: string ;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      });
      this.operation="edit" ;
    }
    this.operation="add" ;
  }
  updateProduct(newProduct: ProductAndProductCategory) {
    this.productService.editProduct(newProduct).subscribe((data) => {
      this.product = data;
    });
  }

  addProduct(newProduct: ProductAndProductCategory) {
    this.productService.addProduct(newProduct).subscribe((data) => {
      this.product = data;
    });
  }
}
