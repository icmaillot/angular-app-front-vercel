import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://server-angular-app.vercel.app/users';
  private endPoint= "purchases"
  
  constructor(private http: HttpClient) {}

  addPurchases(userId: string, products: string[]): Observable<any> {
    const url = `${this.apiUrl}/${this.endPoint}/${userId}`;
    const body = { products };
    return this.http.post(url, body);
  }

  getPurchaseHistory(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${this.endPoint}/${userId}`;
    return this.http.get(url);
  }
}
