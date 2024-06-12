import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/products';
  Add_Product(data: IProduct): Observable<any> {
    return this.http.post(this.API_URL, data);
  }
  Get_All_Product(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  Get_Product_By_Id = (id: number | string): Observable<any> => {
    return this.http.get(`${this.API_URL}/${id}`);
  };
  Delete_Product = (id: number | string): Observable<any> => {
    return this.http.delete(`${this.API_URL}/${id}`);
  };
  Update_Product = (id: number | string, data: IProduct): Observable<any> => {
    return this.http.put(`${this.API_URL}/${id}`, data);
  };
  Search_Product = (name: string): Observable<any> => {
    return this.http.get(`${this.API_URL}?name_like=${name}`);
  };
  Get_Product_By_Category = (id: number | string): Observable<any> => {
    return this.http.get(`http://localhost:3000/category/${id}`);
  };
}
