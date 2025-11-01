import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../models/sales';

const apiUrl = 'https://localhost:7099/api/Sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {}
  
    
    getAll(): Observable<Sales[]> {
      return this.http.get<Sales[]>(apiUrl);
    }
  
   
    getById(id: string): Observable<Sales> {
      return this.http.get<Sales>(`${apiUrl}/${id}`);
    }
  
    
    create(data: Sales): Observable<Sales> {
      return this.http.post<Sales>(apiUrl, data);
    }
  
    
    update(id: string, data: Sales): Observable<any> {
      return this.http.put<any>(`${apiUrl}/${id}`, data);
    }
  
   
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${apiUrl}/${id}`);
    }
}
