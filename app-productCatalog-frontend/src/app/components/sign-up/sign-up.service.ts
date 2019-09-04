import { Injectable } from '@angular/core';

//HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private url: string = 'https://my-json-server.typicode.com/denisweb777/app-productCatalog/users';

  constructor(private http: HttpClient) { }

  user = {

  }

  addUser() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8")

    const user = {
      id: 1,
      username: "Bob",
      password: "123"
    }

    return this.http.post(this.url, user, { headers })
  }
}


@Injectable({
  providedIn: 'root'
})
export class S2PostService {

  private url: string = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }



  //отправка данных на сервер.
  addCar(carName: string) {

    //HttpHeaders - класс для работы с заголовками.
    //set()       - метод, позволяющий установить заголовок.
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json; charset=utf8")


    //объект который будет отправлен на сервер.
    const data = {
      name: carName,
      color: 'blue'
    };

    //post() - позволяет отправлять данные передаваемые в потоке на сервер.
    //url    - url-адрес по которому будут отправлены данные.
    //data   - объект который передается на сервер.
    //return - возвращает поток с ответом от сервера в компонент.
    return this.http.post(this.url, data, { headers })
  }
}


