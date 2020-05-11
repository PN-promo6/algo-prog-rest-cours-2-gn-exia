import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from "../../models/user/user";
import { Post } from "../../models/post/post";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let obsData: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users');
    return obsData;

  }

  public getUserById(id: string): Observable<User> {
    let obsUserId: Observable<User> = this.httpClient.get<User>('http://localhost:3000/users/' + id);
    return obsUserId;

  }

  public fetchPosts(): Observable<Post[]> {
    let obsDataPost: Observable<Post[]> = this.httpClient.get<Post[]>('http://localhost:3000/posts');
    return obsDataPost;

  }
}
