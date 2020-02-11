import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public client:HttpClient) { }

  private URL: string = environment.baseUrl;
  
  getAll() {
    return this.client.get<Product[]>(this.URL +  "/products?_sort=createdAt&_order=desc");
  }

  getCategory() {
    return this.client.get<Category[]>(this.URL +  "/category");
  }


}
