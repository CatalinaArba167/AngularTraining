import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsAddViewComponent } from './components/presentational/products-add-view/products-add-view.component';
import { AuthInterceptor} from './interceptors/auth.interceptor';
import { AuthenticationViewComponent } from './modules/authentication/components/presentational/authentication-view/authentication-view.component';
import { AuthenticationComponent } from './modules/authentication/components/containers/authentication/authentication.component';
import { AddFormComponent } from './components/containers/add-form/add-form.component';
import { EditFormComponent } from './components/containers/edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductsListViewComponent,
    ProductDetailsViewComponent,
    ProductsFormViewComponent,
    ProductsAddViewComponent,
    AuthenticationViewComponent,
    AuthenticationComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
