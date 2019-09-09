import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  addUser(user: object): Observable<{}> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");

    return this.http.post(this.url, user, { headers })
  }
}


