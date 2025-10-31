import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uom } from '../models/uom';

const apiUrl = 'https://localhost:7099/api/UOM';

@Injectable({
  providedIn: 'root'
})

export class UniteOfMeasurementService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Uom[]> {
    return this.http.get<Uom[]>(apiUrl);
  }


  getById(id: string): Observable<Uom> {
    return this.http.get<Uom>(`${apiUrl}/${id}`);
  }


  create(data: Uom): Observable<Uom> {
    return this.http.post<Uom>(apiUrl, data);
  }


  update(id: string, data: Uom): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, data);
  }


  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
