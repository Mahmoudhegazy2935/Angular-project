import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  {
  products: Product[] = [];
  // inject service
  constructor(private productService: ProductService) {}


  ngOnInit():void{
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(data);

    });
  }

  deleteProduct(id:number):void
  {
    if(confirm('Are you sure you want to delete this product'))
    {
      this.productService.deleteProduct(id).subscribe( ()=>
      {
        this.products = this.products.filter(product=> product.id !==id);
      });
    }
  }
}
