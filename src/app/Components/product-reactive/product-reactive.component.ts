import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Model/product';

@Component({
  selector: 'app-product-reactive',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './product-reactive.component.html',
  styleUrls: ['./product-reactive.component.css']
})
export class ProductReactiveComponent implements OnInit {
  productForm!: FormGroup;
  editMode: boolean = false;
  productId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      images: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.productId = +id;
      this.productService.getProductById(this.productId).subscribe((product: Product) => {
        this.productForm.patchValue({
          title: product.title,
          price: product.price,
          description: product.describtion,
          categoryId: product.categoryId,
          images: product.images[0]
        });
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const productData: Product = this.productForm.value;

    if (this.editMode) {
      this.productService.updateProduct(this.productId, productData).subscribe(() => {
        this.router.navigate(['/product']);
      });
    } else {
      this.productService.createProduct(productData).subscribe(() => {
        this.router.navigate(['/product']);
      });
    }
  }
}
