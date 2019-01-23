import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Events } from 'ionic-angular';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private API_URL = 'http://172.30.0.45:8180/rastreabilidade/servicos/usuario/'

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public events: Events) {
  }

  login(user: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        user: user,
        password: password
      };

      this.http.get(this.API_URL + 'acesso', { headers: this.getAuthorizationHeader(data.user, data.password), observe: 'response' })
        .subscribe((result: any) => {
          localStorage.setItem('token', result.headers.get('token'));
          localStorage.setItem('userInformation', JSON.stringify(result.body));
          resolve(result.body);
        },
        (error) => {
          reject(error);
        });
    });
  }

  getUserData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'dadoslogin/58338', { observe: 'response' })
      .subscribe((result: any) => {
        resolve(result.body);
      },
      (error) => {
        reject(error);
      });
    });
  }

  sessionExpired() {
    let loading = this.loadingCtrl.create({
      content: 'Sua sessão expirou...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.events.publish('user:logout');
    }, 2000);

  }

  getAuthorizationHeader(user: string, password: string) : HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Basic ' + btoa(user.toUpperCase()+':'+password.toUpperCase())) ;
  }

}
