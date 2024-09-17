import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  private api_url="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  gitAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url)
  }

  gitAllCategories():Observable<any>{
    return this.http.get(this.api_url + "/categories")
  }

  gitProductsByCatrgories(keyword:string):Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/category/"+keyword)
  }


  gitProductById(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
