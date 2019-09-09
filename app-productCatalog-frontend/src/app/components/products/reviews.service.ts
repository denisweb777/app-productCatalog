
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private url: string = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  postReviews(comment: object): Observable<{}> {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json; charset=utf8");

    return this.http.post(this.url, comment, { headers });
  }

  getReviews() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");
    
      return this.http.get(this.url, { headers });
  }
}




