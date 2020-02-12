import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../models/member';
import {Product} from '../models/product';

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

  save(product: Product): Observable<Member> {
    return this.http.post(this.RESOURCE_URL, product);
  }
}
