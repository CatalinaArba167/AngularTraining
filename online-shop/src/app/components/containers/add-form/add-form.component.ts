import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent {
 
  constructor(
    private productService: ProductService
  ) {}

  addProduct(newProduct: ProductAndProductCategory) {
    this.productService.addProduct(newProduct).subscribe();
  }
}
