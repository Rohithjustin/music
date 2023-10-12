import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemomendService {
  private baseUrl = 'http://localhost:8084/api/v4'; 

  constructor(private http: HttpClient) { }

  getAllRecs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewallRecs`);
  }
}
