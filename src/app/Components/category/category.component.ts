import { Component } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Services/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [];
  // inject service
  constructor(private categoryService: CategoryService) {}


  ngOnInit():void{
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;

    });
  }
}
