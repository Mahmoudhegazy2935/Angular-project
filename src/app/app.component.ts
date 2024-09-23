import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./Components/product/product.component";
import { CategoryComponent } from './Components/category/category.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CategoryComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //https://api.escuelajs.co/docs#/
  title = 'Product';
}
