import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiurl="https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }
    getAllProducts(){
      return this.http.get<Product[]>(this.apiurl)
  }
}
