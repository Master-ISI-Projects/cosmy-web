import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Member} from '../models/member';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private RESOURCE_URL = environment.baseUrl + '/members';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Member[]> {
    return this.http.get<Member[]>(this.RESOURCE_URL);
  }

  findById(id: number): Observable<Member> {
    return this.http.get<Member>(this.RESOURCE_URL + '/' + id);
  }

  save(member: Member): Observable<Member> {
    return this.http.post(this.RESOURCE_URL, member);
  }

  getLatestMembers(limit: number = 10): Observable<Member[]> {
    const filter = '?_limit=' + limit;
    return this.http.get<Member[]>(this.RESOURCE_URL + filter);
  }
}
