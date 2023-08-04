import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html'
})
export class EditFormComponent {
  productId!:string|null  ;
  product: ProductAndProductCategory | undefined;
 
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
    }
  }

  updateProduct(newProduct: ProductAndProductCategory) {
    this.productService.editProduct(newProduct).subscribe((data) => {
      this.product = data;
    });
  }
}
