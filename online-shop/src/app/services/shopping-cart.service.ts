import { Injectable } from '@angular/core';
import { ProductAndProductCategory } from 'src/app/types/productsAndProductsCategory';
import { CreateOrder } from 'src/app/types/createOrder';
import { OrderDetail } from 'src/app/types/orderDetail';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  products: ProductAndProductCategory[] = [];
 
  constructor(private http:HttpClient, private snackBar: MatSnackBar){}

  public getShoppingCart(): ProductAndProductCategory[] {
    return this.products;
  }

  public addToShoppingCart(newProduct: ProductAndProductCategory): void {
    const productToUpdate = this.products.find(
      (product: ProductAndProductCategory) =>
        product.productId === newProduct.productId
    );

    if (productToUpdate) {
      productToUpdate.quantity = (productToUpdate.quantity ?? 0) + 1;
    } else {
      newProduct.quantity = newProduct.quantity ?? 1;
      this.products.push(newProduct);
    }
  }

  public removeShoppingCart(productToRemove: ProductAndProductCategory): void {
    const indexToRemove = this.products.findIndex(
      (product: ProductAndProductCategory) =>
        product.productId === productToRemove.productId
    );

    if (indexToRemove !== -1) {
      this.products.splice(indexToRemove, 1);
    }
  }
  public incrementQuantity(product: ProductAndProductCategory) {
    if (product.quantity) product.quantity = product.quantity + 1;
    else product.quantity = 1;
  }
  public decrementQuantity(product: ProductAndProductCategory) {
    if (product.quantity && product.quantity > 1)
      product.quantity = product.quantity - 1;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  

  placeOrder() {
    const timestamp = new Date().toISOString();
    const customerId = 'ea443922-4de8-46d3-aeca-d945b0bbc630';
    const deliveryAddress =  'Country Name, City Name, County Name, Street Address';
    const order: CreateOrder = {
      timestamp: timestamp,
      customerId: customerId,
      deliveryAddress: deliveryAddress,
      orderDetailDtoList: [] 
    };
    for (const product of this.products) {
      const orderDetail: OrderDetail = {
        productId: product.productId,
        quantity: product.quantity || 1
      };
      order.orderDetailDtoList.push(orderDetail);
    }
    this.http.post<any>(environment.urlBackend+'/orders', order)
  .pipe(
    catchError((error) => {
      this.openSnackBar('Error creating order', 'Close');
      return of(null);
    })
  )
  .subscribe(
    (response) => {
      if (response) {
        this.products = [];
        this.openSnackBar('Order created successfully', 'Close');
      }
    }
  );

  }
}
