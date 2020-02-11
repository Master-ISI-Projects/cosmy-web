import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public client:HttpClient) { }

  private URL: string = " http://localhost:3000" + "/products?_sort=createdAt=desc'";
  
  getAll() {
    return this.client.get<Product[]>(this.URL);
  }


}
