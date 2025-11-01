import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerSetup } from '../models/customer-setup';
import { Observable } from 'rxjs';



const apiUrl = 'https://localhost:7099/api/CustomerSetup';

@Injectable({
  providedIn: 'root'
})
export class CustomerSetupService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<CustomerSetup[]> {
    return this.http.get<CustomerSetup[]>(apiUrl);
  }


  getById(id: string): Observable<CustomerSetup> {
    return this.http.get<CustomerSetup>(`${apiUrl}/${id}`);
  }


  create(data: CustomerSetup): Observable<CustomerSetup> {
    return this.http.post<CustomerSetup>(apiUrl, data);
  }


  update(id: string, data: CustomerSetup): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, data);
  }


  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
