import { Component } from "@angular/core";
import { Product } from "../../../model/product";
import { ProductService } from "../../../model/serveres/product.service";
import { NavbarComponent } from "../navbar/navbar/navbar.component";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  dell:string='assets/Dell.png';
  products: Product[] = [];
  constructor(private productservice: ProductService) { }
  ngonInit():void{
    this.productservice.getAllProducts().subscribe(data=>this.products=data)
  }

}
