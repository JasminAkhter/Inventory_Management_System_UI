import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

  

const apiUrl = 'https://localhost:7099/api/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl);
  }

 
  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`${apiUrl}/${id}`);
  }

  
  create(data: Category): Observable<Category> {
    return this.http.post<Category>(apiUrl, data);
  }

  
  update(id: string, data: Category): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, data);
  }

 
  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
