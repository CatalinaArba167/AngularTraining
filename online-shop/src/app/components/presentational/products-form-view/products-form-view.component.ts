import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';

@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss'],
})
export class ProductsFormViewComponent implements OnInit, OnChanges {
  @Input() @Optional() product: ProductAndProductCategory | undefined;
  @Output() @Optional() updateProductEvent = new EventEmitter<ProductAndProductCategory>();
  @Output()@Optional() addProductEvent = new EventEmitter<ProductAndProductCategory>();
  myForm!: FormGroup;



  ngOnChanges(changes: SimpleChanges): void {
    if (this.product) {
      this.myForm.patchValue({
        name: this.product.productName,
        category: this.product.productCategoryName,
        image: this.product.productImageUrl,
        price: this.product.productPrice,
        description: this.product.productDescription,
      });
    }
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        this.validateImageUrl,
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  handleSave() {
    if (this.product) this.editProductHandle();
    else this.addProductHandle();
  }

  addProductHandle(){
    let newProduct: ProductAndProductCategory = {
      productName: this.myForm.value.name ?? '',
      productCategoryName: this.myForm.value.category ?? '',
      productImageUrl: this.myForm.value.image ?? '',
      productPrice: this.myForm.value.price ?? '',
      productDescription: this.myForm.value.description ?? '',
      productId: '',
      productWeight: 0,
      productSupplier: '',
      productCategoryId: '',
      productCategoryDescription: ''
    };
    this.addProductEvent.emit(newProduct);
  }

  editProductHandle() {
    if (this.product) {
      let newProduct: ProductAndProductCategory = {
        productName: this.myForm.value.name ?? '',
        productCategoryName: this.myForm.value.category ?? '',
        productImageUrl: this.myForm.value.image ?? '',
        productPrice: this.myForm.value.price ?? '',
        productDescription: this.myForm.value.description ?? '',
        productId: this.product.productId,
        productWeight: this.product.productWeight,
        productSupplier: this.product.productSupplier,
        productCategoryId: this.product.productCategoryId,
        productCategoryDescription: this.product.productCategoryDescription,
      };
      this.updateProductEvent.emit(newProduct);
    }
  }

  validateImageUrl(control: FormControl): { [key: string]: any } | null {
    const imageUrl = control.value;
    if (!imageUrl) {
      return null;
    }
    if (!imageUrl.match(/\.(jpeg|jpg|png|gif)$/i)) {
      return { invalidImageUrl: true };
    }
    return null;
  }
}
