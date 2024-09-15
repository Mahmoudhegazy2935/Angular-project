import { AllProductsService } from './../../../services/all-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products:any[]= [];

  constructor(private service:AllProductsService){}
  ngOnInit(): void {
  this.getProducts()
  }

  getProducts(){
    this.service.gitAllProducts().subscribe((data:any) => {
      this.products = data;
    });

  }



}
