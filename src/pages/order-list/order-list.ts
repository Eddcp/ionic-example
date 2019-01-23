import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { MaterialListPage } from '../material-list/material-list';
import { OrderListProvider } from '../../providers/order-list/order-list';

@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html'
})
export class OrderListPage {

  public blockId: number;
  public costCenterId: number;

  public listaPedidos = new Array<any>();

  public loaded:boolean = false;

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private orderListProvider: OrderListProvider) {
  }

  openMaterialList(pedido) {
    this.navCtrl.push(MaterialListPage, {
      numeroPedido: pedido.numero
    });
  }

  getOrderList(blockId: number, costCenterId: number) {
    let loading= this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    this.orderListProvider.getOrderList(blockId, costCenterId)
    .then((result: any) => {
      this.loaded = true;
      this.listaPedidos = result;
      loading.dismiss();
    })
    .catch((error: any) => {
      loading.dismiss();
      console.log(error);
    });
  }

  ionViewDidEnter() {
    this.blockId = this.navParams.get('blockId');
    this.costCenterId = this.navParams.get('costCenterId');
    this.getOrderList(this.blockId, this.costCenterId);
  }


}
