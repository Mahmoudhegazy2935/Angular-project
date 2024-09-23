import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AllProductsService } from '../../../services/all-products.service';
import { SpinerComponent } from '../../spiner/spiner.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../product/product';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [SpinerComponent, RouterModule, FormsModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private service: AllProductsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getproduct();
  }
  getproduct() {
    this.loading = true;
    this.service.getProductsById(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.data = res;
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }

  @Input() num: Product = {} as Product;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;
  add() {
    this.item.emit({ item: this.num, quantity: this.amount });
  }
}
