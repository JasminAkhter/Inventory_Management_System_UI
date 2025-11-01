import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuplierLedger } from '../models/suplier-ledger';

const apiUrl = 'https://localhost:7099/api/SuplierLedger';

@Injectable({
  providedIn: 'root'
})
export class SuplierLedgerService {

  constructor(private http: HttpClient) {}
  
    
    getAll(): Observable<SuplierLedger[]> {
      return this.http.get<SuplierLedger[]>(apiUrl);
    }
  
   
    getById(id: string): Observable<SuplierLedger> {
      return this.http.get<SuplierLedger>(`${apiUrl}/${id}`);
    }
  
    
    create(data: SuplierLedger): Observable<SuplierLedger> {
      return this.http.post<SuplierLedger>(apiUrl, data);
    }
  
    
    update(id: string, data: SuplierLedger): Observable<any> {
      return this.http.put<any>(`${apiUrl}/${id}`, data);
    }
  
   
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${apiUrl}/${id}`);
    }
}
