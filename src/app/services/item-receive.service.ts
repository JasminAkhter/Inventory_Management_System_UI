import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemReceive } from '../models/item-receive';

const apiUrl = 'https://localhost:7099/api/ItemReceive';

@Injectable({
  providedIn: 'root'
})
export class ItemReceiveService {

  constructor(private http: HttpClient) {}
  
    
    getAll(): Observable<ItemReceive[]> {
      return this.http.get<ItemReceive[]>(apiUrl);
    }
  
   
    getById(id: string): Observable<ItemReceive> {
      return this.http.get<ItemReceive>(`${apiUrl}/${id}`);
    }
  
    
    create(data: ItemReceive): Observable<ItemReceive> {
      return this.http.post<ItemReceive>(apiUrl, data);
    }
  
    
    update(id: string, data: ItemReceive): Observable<any> {
      return this.http.put<any>(`${apiUrl}/${id}`, data);
    }
  
   
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${apiUrl}/${id}`);
    }
}
