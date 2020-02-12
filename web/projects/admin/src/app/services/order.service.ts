import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../models/member';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private RESOURCE_URL = environment.baseUrl + '/orders';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.RESOURCE_URL);
  }

  findById(id: number): Observable<Order> {
    return this.http.get<Order>(this.RESOURCE_URL + '/' + id);
  }

  save(order: Order): Observable<Order> {
    return this.http.post<Order>(this.RESOURCE_URL, order);
  }

  getLatestOrders(limit: number = 10): Observable<Order[]> {
    const filter = '?limit=' + limit;
    return this.http.get<Order[]>(this.RESOURCE_URL + filter);
  }
}
