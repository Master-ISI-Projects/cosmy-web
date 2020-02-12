import { Injectable } from '@angular/core';
import { Comments } from '../models/comments';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

 
  private URL: string =  environment.baseUrl;
  
  constructor(public http: HttpClient) { }

  getCommentsById(id: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.URL + "/comments?postId=" + id);
  }
  add(comment: Comments){
  
   return this.http.post<Comments>(this.URL + "/comments",comment);
  
  }
  
}

