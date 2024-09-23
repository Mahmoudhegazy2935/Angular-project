import { Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { CategoyDetailsComponent } from './Components/categoy-details/categoy-details.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetilasComponent } from './Components/product-detilas/product-detilas.component';

export const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'category/:id',component:CategoyDetailsComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:ProductDetilasComponent}
];
