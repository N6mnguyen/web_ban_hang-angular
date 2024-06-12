import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/categories';
  Add_Category(data: ICategory): Observable<any> {
    return this.http.post(this.API_URL, data);
  }
  Get_All_Category(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
