import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OrderListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderListProvider {
  private API_URL = 'http://172.30.0.45:8180/rastreabilidade/servicos/pedidos/'

  constructor(public http: HttpClient) {
    console.log('Hello OrderListProvider Provider');
  }

  getBlockList() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'listabloco', { observe: 'response' })
      .subscribe((result: any) => {
        resolve(result.body);
      },
      (error) => {
        reject(error);
      });
    });
  }

  getCostCentersByUser() {
    let userId = this.getUserId();
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + `listacentrocusto/${userId}`, { observe: 'response' })
      .subscribe((result: any) => {
        resolve(result.body);
      },
      (error) => {
        reject(error);
      });
    });
  }

  getOrderList(blockId: number, costCenterId: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + `listapedido/${blockId}/${costCenterId}`, { observe: 'response' })
      .subscribe((result: any) => {
        resolve(result.body);
      },
      (error) => {
        reject(error);
      });
    });
  }

  getUserId() {
    let user = JSON.parse(localStorage.getItem('userInformation')) as any; //Colocar as any pra evitar erros na IDE
    return user.usuarioId;
  }

}
