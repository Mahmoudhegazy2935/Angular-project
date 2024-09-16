import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../../services/all-products.service';
import { Product } from '../../../product/product';
import { CartsService } from '../../../services/carts.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent  {
products:Product[]=[];
item: any;
data: any;
constructor(private productservice:CartsService){}


 
  ngOnInit():void{
  
  this.productservice.getAllproducts().subscribe (data =>{this.products=data 
     console.log(this.products)
  });}}
