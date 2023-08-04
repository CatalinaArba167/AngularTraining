import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsAddViewComponent } from './components/presentational/products-add-view/products-add-view.component';
import { ProductsEditViewComponent } from './components/presentational/products-edit-page/products-edit-view.component';
import { AuthInterceptor} from './interceptors/auth.interceptor';
import { AuthenticationViewComponent } from './modules/authentication/components/presentational/authentication-view/authentication-view.component';
import { AuthenticationComponent } from './modules/authentication/components/containers/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
    ProductsFormComponent,
    ProductsFormViewComponent,
    ProductsAddViewComponent,
    ProductsEditViewComponent,
    AuthenticationViewComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
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
