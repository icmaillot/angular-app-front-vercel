import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignupRequest {
  pseudo: string;
  email: string;
  password: string;
}

interface LoginRequest {
  pseudo: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://server-angular-app.vercel.app/auth';
  isLoggedIn = false;
  userId: string | null = null;

  constructor(private http: HttpClient) {}

  register(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, signupRequest);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }
}
