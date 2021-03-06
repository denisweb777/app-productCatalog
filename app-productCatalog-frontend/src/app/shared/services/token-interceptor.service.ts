import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) { 
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: window.localStorage.token
      }
    })
    return next.handle(tokenizedReq);
  }
}

