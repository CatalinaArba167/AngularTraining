import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductAndProductCategory } from '../types/productsAndProductsCategory';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private authService:AuthService,
    private http: HttpClient
  ) {}

  logOut(){
    this.authService.logout();
  }

  authProfile()
  {
    this.authService.authProfileInfo();
  }

  addToShoppingCart(product: ProductAndProductCategory) {
    this.shoppingCartService.addToShoppingCart(product);
  }

  getProducts(): Observable<ProductAndProductCategory[]> {
    return this.http.get<ProductAndProductCategory[]>(
      environment.urlBackend + '/products'
    );
  }

  getProductById(id: string): Observable<ProductAndProductCategory> {
    return this.http.get<ProductAndProductCategory>(
      environment.apiUrl + '/products/' + id
    );
  }

  deleteProduct(id: string): Observable<ProductAndProductCategory> {
    return this.http.delete<ProductAndProductCategory>(
      environment.apiUrl + '/products/' + id
    );
  }

  editProduct(newProduct:ProductAndProductCategory):Observable<ProductAndProductCategory>
  {
    return this.http.put<ProductAndProductCategory>(environment.apiUrl + '/products', newProduct);
  }

  addProduct(newProduct:ProductAndProductCategory):Observable<ProductAndProductCategory>
  {
    return this.http.post<ProductAndProductCategory>(environment.apiUrl + '/products', newProduct);
  }
}
