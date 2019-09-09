
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  //products
  getProducts() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");
    
      // is used TokenInterceptorService (shared/services/token-interceptor.service).
      //.set("authorization", window.localStorage.token);
     
    return this.http.get(this.url, { headers });
  }

  //product
  getProduct(id) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8");

    return this.http.get(this.url+`/${id}`, { headers });
  }
}
