import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../models/member';
import {Post} from '../models/post';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private RESOURCE_URL = environment.baseUrl + '/posts';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.RESOURCE_URL);
  }

  findById(id: number): Observable<Member> {
    return this.http.get<Post>(this.RESOURCE_URL + '/' + id);
  }

  save(post: Post): Observable<Post> {
    return this.http.post(this.RESOURCE_URL, post);
  }

  getLatestPosts(limit: number = 10): Observable<Post[]> {
    const filter = '?_limit=' + limit;
    return this.http.get<Post[]>(this.RESOURCE_URL + filter);
  }
}
