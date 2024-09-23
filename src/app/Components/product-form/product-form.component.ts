import { Component } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product:Product = {
    id: 0, title: '', images: [''],
    price: 0,
    describtion: '',
    categoryId: 0
  };
editMode:boolean = false;

constructor(
  private productService:ProductService,
  private route:ActivatedRoute,
  private router:Router
){}

ngOnInit():void
{
  const id=this.route.snapshot.paramMap.get('id');
  if(id)
  {
    this.editMode = true;
    this.productService.getProductById(+id).subscribe(product=>{
      this.product = product;
    });
  }
}

onSubmit():void{
  if(this.editMode)
  {
    this.productService.updateProduct(this.product.id,this.product).subscribe(()=>
    {
      this.router.navigate(['/product']);
    });
  }
  else
  {
    this.productService.createProduct(this.product).subscribe(()=>
    {
      this.router.navigate(['/product']);
    });
  }
}

}
