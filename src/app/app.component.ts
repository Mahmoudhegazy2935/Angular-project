import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { CartComponent } from "./components/carts/cart/cart.component";
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductComponent } from './components/products/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ProductComponent, SpinnerComponent,NavBarComponent, AllProductsComponent, ProductsDetailsComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
