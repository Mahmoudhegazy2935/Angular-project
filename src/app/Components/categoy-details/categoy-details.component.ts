import { Component } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoy-details',
  standalone: true,
  imports: [],
  templateUrl: './categoy-details.component.html',
  styleUrl: './categoy-details.component.css'
})
export class CategoyDetailsComponent {
  // category:Category = {
  //   id:0,
  //   name: 'Category',
  //   image:''
  // } ;

  category:Category = {}as Category;
  constructor(private categoryService:CategoryService, private route:ActivatedRoute){

  }

  ngOnInit():void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategoryById(id).subscribe(data=>{
      this.category = data;
    });
  }
}
