import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsAddViewComponent } from './components/presentational/products-add-view/products-add-view.component';
import { AuthenticationComponent } from './modules/authentication/components/containers/authentication/authentication.component';
import { AuthGuard } from './guards/auth.guard';
import { AddFormComponent } from './components/containers/add-form/add-form.component';
import { EditFormComponent } from './components/containers/edit-form/edit-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'shop', component: ShoppingCartDetailsComponent,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditFormComponent, canActivate: [AuthGuard] }, 
  { path: 'add', component:AddFormComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
