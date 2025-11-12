import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // 👇 Directly use your Spring Boot backend URL
  private apiUrl = 'http://localhost:8066/admins';

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addAdmin(admin: any): Observable<any> {
    return this.http.post(this.apiUrl, admin);
  }

  updateAdmin(id: number, admin: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
