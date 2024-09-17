import { Routes } from '@angular/router';
import { CartComponent } from './components/carts/cart/cart.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';

export const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: "details/:id", component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
