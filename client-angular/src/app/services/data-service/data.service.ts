import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from "../../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let obsData: Observable<any> = this.httpClient.get('http://localhost:3000/users');
    return obsData;

  }

  public getUserById(id: string): Observable<User[]> {
    let obsUserId: Observable<any> = this.httpClient.get('http://localhost:3000/users' + id);
    return obsUserId;

  }
}
