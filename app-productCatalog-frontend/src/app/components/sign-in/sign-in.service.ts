import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  authUser(user: object): Observable<{}> {
    let url: string = `http://localhost:3000/users?username=${user['username']}&password=${user['password']}`;

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");
    
    return this.http.get(url, { headers });
  }
}