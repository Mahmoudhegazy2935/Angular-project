import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../../../services/all-products.service';
import { SpinerComponent } from "../../spiner/spiner.component";

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [SpinerComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any={}
  loading: boolean=false;
  constructor(private route:ActivatedRoute , private service:AllProductsService){
    this.id=this.route.snapshot.paramMap.get("id")
  }
  ngOnInit(): void {
    this.getproduct()
  }
  getproduct(){
  this.loading=true;
  this.service.getProductsById(this.id).subscribe(res=>{
  this.loading=false
  this.data=res
},error=>{
    this.loading=false
    alert("error")
  }
)
  }
}
