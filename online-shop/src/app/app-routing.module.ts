import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsEditViewComponent } from './components/presentational/products-edit-page/products-edit-view.component';
import { ProductsAddViewComponent } from './components/presentational/products-add-view/products-add-view.component';
import { AuthenticationComponent } from './modules/authentication/components/containers/authentication/authentication.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'shop', component:   ShoppingCartDetailsComponent },
  { path: 'edit/:id', component: ProductsEditViewComponent },
  { path: 'add', component: ProductsAddViewComponent },
  { path: 'auth', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
