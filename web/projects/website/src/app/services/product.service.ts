import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  private URL: string = environment.baseUrl;
  
  getAll(category: string = '') {
    let filter = '?_sort=createdAt&_order=desc';
    if(category) {
      filter += '&category=' + category;
    }
    
    return this.http.get<Product[]>(this.URL +  "/products" + filter);
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.URL +  "/categories");
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL + "/products/" + id);
  }


}
