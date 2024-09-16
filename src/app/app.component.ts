import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { CartComponent } from './components/carts/cart/cart.component';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { BrowserModule } from '@angular/platform-browser';
import { SpinerComponent } from './components/spiner/spiner.component';
import { SelectComponent } from './shared/components/select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ,BrowserModule
  imports: [
    RouterModule,
    RouterOutlet,
    SpinerComponent,
    NavBarComponent,
    ProductsDetailsComponent,
    CartComponent,
    CommonModule,
    RouterModule,
    ProductsDetailsComponent,
    AllProductsComponent,
    SelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularProject';
}
