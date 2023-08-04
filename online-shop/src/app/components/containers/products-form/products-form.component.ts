import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  @Input() productId:string | undefined |  null;
  @Input() operation:string | undefined;

  product: ProductAndProductCategory | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    console.log(this.operation);
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      });
    }
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
