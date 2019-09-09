import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  getComments(user:string): Observable < {} > {
    const url: string = `http://localhost:3000/reviews?username=${user}`;

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");
    
      return this.http.get(url, { headers });
  }
}
