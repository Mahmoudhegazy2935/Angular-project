import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = "https://api.escuelajs.co/api/v1/products";
  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  deleteProduct(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
