import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginProvider } from './../../providers/login/login';

@Injectable()
export class TokenInterceptorProvider implements HttpInterceptor {

  public loginService;
  public urlLogin = 'http://172.30.0.45:8180/rastreabilidade/servicos/usuario/acesso';

  constructor(
    private loginProvider: LoginProvider) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentToken = localStorage.getItem('token');

    if (currentToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentToken}`
        }
      })
    }

    return next.handle(request).catch(error => {
      if (error.url !== this.urlLogin && error.status === 401) {//Unauthorized
        this.loginProvider.sessionExpired();
      }
      return Observable.throw(error);
    }) as any;
  }


}
