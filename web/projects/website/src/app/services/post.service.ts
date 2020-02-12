import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  private URL: string =  environment.baseUrl;

  getAll() {
    return this.http.get<Post[]>(this.URL + "/posts");
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.URL + "/posts/" + id);
  }
}
