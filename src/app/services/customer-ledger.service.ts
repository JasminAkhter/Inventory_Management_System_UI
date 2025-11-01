import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLedger } from '../models/customer-ledger';


const apiUrl = 'https://localhost:7099/api/CustomerLedger';

@Injectable({
  providedIn: 'root'
})
export class CustomerLedgerService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<CustomerLedger[]> {
    return this.http.get<CustomerLedger[]>(apiUrl);
  }


  getById(id: string): Observable<CustomerLedger> {
    return this.http.get<CustomerLedger>(`${apiUrl}/${id}`);
  }


  create(data: CustomerLedger): Observable<CustomerLedger> {
    return this.http.post<CustomerLedger>(apiUrl, data);
  }


  update(id: string, data: CustomerLedger): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, data);
  }


  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
