import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { Environment } from './environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private http: HttpClient) {}
  getallProducts() {
    return this.http.get(Environment.baseapi + 'products');
  }
  getallcategories() {
    return this.http.get(Environment.baseapi + 'products/categories');
  }
  getProductByCategory(keyword: string) {
    return this.http.get(Environment.baseapi + 'products/category/' + keyword);
  }
}
