import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "https://api.escuelajs.co/api/v1/categories";
  constructor(private http:HttpClient) { }

  getAllCategories() : Observable<Category[]>
  {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id:number): Observable<Category>
  {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
}
