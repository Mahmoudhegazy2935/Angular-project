import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  private api_url="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  gitAllProducts():Observable<any>{
    return this.http.get(this.api_url)
  }
}
