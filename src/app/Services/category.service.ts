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
  createCategory(category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.apiUrl,category);
  }
  updateCategory(id:number,cateogry:Category):Observable<Category>
  {
    return this.http.put<Category>(`${this.apiUrl}/${id}`,cateogry);
  }
  deleteCategory(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
