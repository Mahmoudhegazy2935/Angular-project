import { Component } from "@angular/core";
import { Product } from "../../../model/product";
import { ProductService } from "../../../model/serveres/product.service";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  constructor(private productservice: ProductService) { }
  ngonInit():void{
    this.productservice.getAllProducts().subscribe(data=>this.products=data)
  }

}
