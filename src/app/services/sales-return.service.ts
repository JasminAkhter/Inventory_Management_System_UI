import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesReturn } from '../models/sales-return';

const apiUrl = 'https://localhost:7099/api/SalesReturn';

@Injectable({
  providedIn: 'root'
})
export class SalesReturnService {

  constructor(private http: HttpClient) {}
  
    
    getAll(): Observable<SalesReturn[]> {
      return this.http.get<SalesReturn[]>(apiUrl);
    }
  
   
    getById(id: string): Observable<SalesReturn> {
      return this.http.get<SalesReturn>(`${apiUrl}/${id}`);
    }
  
    
    create(data: SalesReturn): Observable<SalesReturn> {
      return this.http.post<SalesReturn>(apiUrl, data);
    }
  
    
    update(id: string, data: SalesReturn): Observable<any> {
      return this.http.put<any>(`${apiUrl}/${id}`, data);
    }
  
   
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${apiUrl}/${id}`);
    }
}
