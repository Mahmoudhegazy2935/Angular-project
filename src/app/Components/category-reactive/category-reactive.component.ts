import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../Model/category';

@Component({
  selector: 'app-category-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category-reactive.component.html',
  styleUrl: './category-reactive.component.css'
})
export class CategoryReactiveComponent {
  categoryForm!:FormGroup;
  editMode:boolean = false;
  categoryId:number=0;
  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.categoryForm = this.formBuilder.group({
      name : ['', Validators.required],
      image:['',[Validators.required, Validators.pattern('')]]
    });
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.editMode = true;
      this.categoryId = +id;
      this.categoryService.getCategoryById(this.categoryId).subscribe(category=>
      {
        this.categoryForm.patchValue({
          name : category.name,
          image : category.image
        });
      });
    }
  }

  onSubmit():void
  {
    if(this.categoryForm.invalid)
    {
      return;
    }
    const categoryData:Category = this.categoryForm.value;

    if(this.editMode)
    {
      this.categoryService.updateCategory(this.categoryId,categoryData).subscribe(()=>{
        this.router.navigate(['/category']);
      });
    }
    else
    {
      this.categoryService.createCategory(categoryData).subscribe(()=>
      {
        this.router.navigate(['/category']);
      });
    }
  }
}
