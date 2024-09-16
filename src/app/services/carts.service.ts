import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private apiUrl="https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { 

}

getAllproducts():Observable<Product[]>{
return this.http.get<Product[]>(this.apiUrl)

}

}
