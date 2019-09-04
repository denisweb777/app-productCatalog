
import { Injectable } from '@angular/core';

//HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = "https://my-json-server.typicode.com/denisweb777/app-productCatalog/posts/1";

  constructor(private http: HttpClient) { }
  getData() {
    this.http.get(this.url)  
      .subscribe(response => {  
        console.log(response);  
      });
  }
}
