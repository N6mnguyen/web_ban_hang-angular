import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  AUTH_URL = 'http://localhost:3000/';
  Sign_Up = (user: IUser): Observable<any> => {
    return this.http.post(`${this.AUTH_URL}/signup`, user);
  };
  Sign_In = (user: IUser): Observable<any> => {
    return this.http.post(`${this.AUTH_URL}/signin`, user);
  };
}
