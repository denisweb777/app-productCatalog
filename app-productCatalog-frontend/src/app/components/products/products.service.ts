
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getData() {
    return [{ name: 'Bob', age: 50 }, { name: 'Olia', age: 25 }];
  }
}

