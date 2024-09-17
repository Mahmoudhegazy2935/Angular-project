import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../../services/all-products.service';
import { Product } from '../../../product/product';
import { SpinerComponent } from "../../spiner/spiner.component";
import { SelectComponent } from '../../../shared/components/select/select.component';
import { ProductComponent } from '../../../products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,

  imports: [SpinerComponent,SelectComponent ,ProductComponent,FormsModule,RouterModule],


  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
[x: string]: any;
  products: any = [];
  categories: any = [];
  loading: boolean = false;
  cartProducts:any[]=[];
  data: any;
  item: any;
  constructor(private productservice: AllProductsService) {}

  ngOnInit() {
    this.getproduct();
    this.getCategory();
  }
  getproduct() {
    this.loading = true;
    this.productservice.getallProducts().subscribe(
      (data: any) => {
        this.products = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error');
      }
    );
  }
  getCategory() {
    this.loading = true;
    this.productservice.getallcategories().subscribe(
      (data: any) => {
        this.categories = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error');
      }
    );
  }
  filtercategories(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getproduct();
    } else {
      this.getProductCategory(value);
    }
  }
  getProductCategory(keyword: string) {
    this.loading = true;
    this.productservice.getProductByCategory(keyword).subscribe((data: any) => {
      this.products = data;
      this.loading = false;
    });
  }
  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }




  }


