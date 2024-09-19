import { Product } from '../../../models/product';
import { AllProductsService } from './../../../services/all-products.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { SpinnerComponent } from "../../spinner/spinner.component";
import { ProductComponent } from "../product/product.component";
import { RouterModule } from '@angular/router';
import { ProductsDetailsComponent } from '../products-details/products-details.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ProductsDetailsComponent,RouterModule,SpinnerComponent, ProductComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products:Product[]= [];

  categories:string[]= [];
  imgCategories:string[]= ["./download.jpeg","./download (1).jpeg","./download (2).jpeg","./download (3).jpeg"];
  loading:boolean = false;
  cartProduct:any[]=[];



  constructor(private service:AllProductsService){}
  ngOnInit(): void {
  this.getProducts()
  this.getCategories()
  }
  getProducts(){
    this.loading=true;
    this.service.gitAllProducts().subscribe(data=> {
      this.products = data;
      this.loading=false;
    });

  }


  getCategories(){
    this.loading=true;
    this.service.gitAllCategories().subscribe(data => {
      this.categories = data;
      this.loading=false;
      console.log(data);
    });

  }

  filterByCategory(index:number){
  const selectedCategory  = this.categories[index];
  console.log(selectedCategory)
  this.gitproductsCategories(selectedCategory)
  }

  gitproductsCategories(keywords:string){
    this.loading=true;
    this.service.gitProductsByCatrgories(keywords).subscribe(data=> {
      this.products = data;
      this.loading=false;
      console.log(data);
    });

  }

  AddToCart(event:any){
    // JSON.stringify() //send data
    // JSON.parse() //recive data
    // this.cartProduct=localStorage.getItem('cartProduct');
    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProduct.find(item=>item.item.id == event.item.id)
      if(exist){
       alert("Product already exists in your cart")
      }else{
        this.cartProduct.push(event);
        localStorage.setItem('cart',JSON.stringify(this.cartProduct));
      }
    }else{
      this.cartProduct.push(event);
      localStorage.setItem('cart',JSON.stringify(this.cartProduct));

    }

  }


}
