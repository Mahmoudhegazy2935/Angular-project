import { Routes } from '@angular/router';
import { CartComponent } from './components/carts/cart/cart.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
