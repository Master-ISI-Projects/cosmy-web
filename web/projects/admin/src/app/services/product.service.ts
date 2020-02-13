import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private RESOURCE_URL = environment.baseUrl + '/products';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.RESOURCE_URL);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.RESOURCE_URL + '/' + id);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.RESOURCE_URL, product);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl +  '/categories');
  }
}
