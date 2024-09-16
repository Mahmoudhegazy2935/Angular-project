import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../../services/all-products.service';
import { Product } from '../../../product/product';
import { SpinerComponent } from "../../spiner/spiner.component";

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SpinerComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products: any = [];
  categories: any = [];
  loading: boolean = false;
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
}
