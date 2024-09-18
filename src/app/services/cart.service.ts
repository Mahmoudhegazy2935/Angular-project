import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

getAllCarts(param?:any){
  let params =new HttpParams()
  params=params.append('startDate',param?.start).append('endDate',param?.end)
  return this.http.get(Environment.baseapi + 'carts',{params:params})
}
deleteCart(id:number){
  return this.http.delete(Environment.baseapi + 'carts/' + id)
}
}
