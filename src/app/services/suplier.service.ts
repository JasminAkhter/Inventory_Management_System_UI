import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suplier } from '../models/suplier';

const apiUrl = 'https://localhost:7099/api/Suplier';

@Injectable({
  providedIn: 'root'
})
export class SuplierService {

  constructor(private http: HttpClient) {}
  
    
    getAll(): Observable<Suplier[]> {
      return this.http.get<Suplier[]>(apiUrl);
    }
  
   
    getById(id: string): Observable<Suplier> {
      return this.http.get<Suplier>(`${apiUrl}/${id}`);
    }
  
    
    create(data: Suplier): Observable<Suplier> {
      return this.http.post<Suplier>(apiUrl, data);
    }
  
    
    update(id: string, data: Suplier): Observable<any> {
      return this.http.put<any>(`${apiUrl}/${id}`, data);
    }
  
   
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${apiUrl}/${id}`);
    }
}
