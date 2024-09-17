import { Product } from './../../../models/product';
import { Component } from '@angular/core';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../../../services/all-products.service';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [SpinnerComponent,AllProductsComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  loading:boolean = false;
  id:any;
  data:any={}

  constructor(private route: ActivatedRoute , private service:AllProductsService){
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading = true;
    this.service.gitProductById(this.id).subscribe(res =>{
      this.loading = false;
      this.data = res

    })
  }
}
