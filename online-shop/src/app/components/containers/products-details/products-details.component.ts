import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockProductAndProductCategory } from 'src/app/mocks/product-and-product-category-dto-mock';
import { ProductService } from 'src/app/services/products.service';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  product: ProductAndProductCategory | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      });

  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe();
  }


}
