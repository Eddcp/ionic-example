import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderListPage } from '../order-list/order-list';
import { OrderListProvider } from '../../providers/order-list/order-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public blockList = new Array<any>();
  public costCentersList = new Array<any>();

  public selectedBlock: number;
  public selectedCostCenter: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private orderListProvider: OrderListProvider) {

  }

  ionViewDidEnter() {
    this.getBlockList();
    this.getCostCentersByUser();
  }

  getBlockList() {
    /* Se a lista for vazia chama o serviço pra populá-la, se a lista não for vazia quer dizer que não precisa chamar novamente.
    Simples maneira de cachear objeto pra não chamar o serviço sempre */
    if (!this.blockList.length) {
      this.orderListProvider.getBlockList()
      .then((result: any) => {
        console.log(result);
        this.blockList = result;
      })
      .catch((error: any) => {
        console.log(error);
      });
    }

  }

  getCostCentersByUser() {
    if (!this.costCentersList.length) {
      this.orderListProvider.getCostCentersByUser()
      .then((result: any) => {
        console.log(result);
        this.costCentersList = result;
      })
      .catch((error: any) => {
        console.log(error);
      });
    }
  }

  openOrderListPage() {
    this.navCtrl.push(OrderListPage, {
      costCenterId: this.selectedCostCenter,
      blockId: this.selectedBlock
    });
  }

}
