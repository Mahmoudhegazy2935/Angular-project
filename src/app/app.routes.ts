import { Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { CategoyDetailsComponent } from './Components/categoy-details/categoy-details.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetilasComponent } from './Components/product-detilas/product-detilas.component';
import { CategoyFormComponent } from './Components/categoy-form/categoy-form.component';
import { CategoryReactiveComponent } from './Components/category-reactive/category-reactive.component';
import { ProductReactiveComponent } from './Components/product-reactive/product-reactive.component';

export const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'category/:id',component:CategoyDetailsComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:ProductDetilasComponent},

  // {path:'new-category',component:CategoyFormComponent},
  // {path:'edit-category/:id',component:CategoyFormComponent}
  {path:'new-category',component:CategoryReactiveComponent},
  {path:'edit-category/:id',component:CategoryReactiveComponent},
  {path:'new-product',component:ProductReactiveComponent},
  {path:'edit-product/:id',component:ProductReactiveComponent}
];
