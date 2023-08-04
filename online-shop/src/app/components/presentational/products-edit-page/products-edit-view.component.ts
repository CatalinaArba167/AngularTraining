import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { ProductsFormViewComponent } from '../products-form-view/products-form-view.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit-view',
  templateUrl: './products-edit-view.component.html',
  styleUrls: ['./products-edit-view.component.scss']
})
export class ProductsEditViewComponent implements OnInit {
  productId:string | undefined |null;
  operation:string="edit";
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
