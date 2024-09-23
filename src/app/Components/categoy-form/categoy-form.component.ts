import { Component } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoy-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categoy-form.component.html',
  styleUrl: './categoy-form.component.css'
})
export class CategoyFormComponent {
category:Category = {id:0, name:'', image:''};
editMode:boolean = false;

constructor(
  private categoryService:CategoryService,
  private route:ActivatedRoute,
  private router:Router
){}

ngOnInit():void
{
  const id=this.route.snapshot.paramMap.get('id');
  if(id)
  {
    this.editMode = true;
    this.categoryService.getCategoryById(+id).subscribe(category=>{
      this.category = category;
    });
  }
}

onSubmit():void{
  if(this.editMode)
  {
    this.categoryService.updateCategory(this.category.id,this.category).subscribe(()=>
    {
      this.router.navigate(['/category']);
    });
  }
  else
  {
    this.categoryService.createCategory(this.category).subscribe(()=>
    {
      this.router.navigate(['/category']);
    });
  }
}

}
