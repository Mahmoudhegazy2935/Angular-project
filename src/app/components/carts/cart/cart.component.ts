
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(){}
  cartProducts:any[]=[];
  ngOnInit():void{
    this.getCartProducts()
  }
  getCartProducts(){
  if (localStorage.getItem("cart")) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  }
  console.log(this.cartProducts);

  }

}
