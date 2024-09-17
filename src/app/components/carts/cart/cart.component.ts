import { Product } from './../../../product/product';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,

  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private service:CartService){}
  cartProducts:any[]=[];
  total:any=0
  success:boolean=false
  ngOnInit():void{
    this.getCartProducts()
  }
  getCartProducts(){
  if ("cart" in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  }
  this.getCartTotal()
  }

  addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))

  }

  detectChange(){
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))

  }
  minsAmount(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))

  }


  deleteProduct(index:number){
    this.cartProducts.splice(index, 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))

  }

  clearCart(){
    this.cartProducts=[]
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))

  }


  getCartTotal(){
    this.total=0
    for(let x in this.cartProducts){
      this.total+=this.cartProducts[x].item.price*this.cartProducts[x].quantity
    }


  }


  addCatr(){
    let products=this.cartProducts.map(item=>{
     return {productId:item.item.id,quantity:item.quantity}
    })
    let Model ={
      userId:Number,
      date: new Date(),
      products:products

    }
    this.service.createNewCart(Model).subscribe(res=>{
      this.success=true
    })

    console.log(Model)
  }



}
