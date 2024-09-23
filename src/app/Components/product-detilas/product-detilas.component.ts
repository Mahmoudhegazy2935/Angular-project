import { Component } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Location} from '@angular/common';
@Component({
  selector: 'app-product-detilas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detilas.component.html',
  styleUrl: './product-detilas.component.css'
})
export class ProductDetilasComponent {
  product:Product={} as Product;
  constructor(public productService:ProductService,
    private route:ActivatedRoute, private location:Location
  )
  {}

  ngOnInit():void
  {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(data=>{
      this.product = data;
    });
  }

  BackFunction()
  {
    this.location.back();
  }
}
