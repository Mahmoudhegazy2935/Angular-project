import { Product } from './../../../product/product';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { AllProductsService } from '../../../services/all-products.service';
@Component({
  selector: 'app-cart',
  standalone: true,

  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private service:CartService,private build:FormBuilder,private productService:AllProductsService){}
  carts:any[]=[];
  products:any[]=[];
  form!:FormGroup;
  total:number=0;
  details:any;
  ngOnInit():void{
   this.getAllCarts();
   this.form=this.build.group({
    start:[''],
    end:['']
   })
  }
  getAllCarts(){
    this.service.getAllCarts().subscribe((res:any)=>{
      this.carts=res
    })
}

applyfilter(){
  let date=this.form.value
  this.service.getAllCarts(date).subscribe((res:any)=>{
    this.carts=res
  })
}
deleteCart(id:number){
  this.service.deleteCart(id).subscribe((res:any)=>{
    this.getAllCarts()
    alert("Cart deleted Success")
  })
}

View(index:number){
  this.products=[];
  this.details=this.carts[index]
  for(let x in this.details.products){
    this.productService.getProductsById(this.details.products[x].productId).subscribe((res:any)=>{
      this.products.push({item:res , quantity:this.details.products[x].quantity})
    })
  }
}
}