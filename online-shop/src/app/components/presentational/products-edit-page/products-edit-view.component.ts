import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { ProductsFormViewComponent } from '../products-form-view/products-form-view.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit-view',
  templateUrl: './products-edit-view.component.html'
})
export class ProductsEditViewComponent {
  constructor(
    private route: ActivatedRoute
  ) {}
}
