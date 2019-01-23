import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-list',
  templateUrl: 'material-list.html',
})
export class MaterialListPage {
  public pedidoId: number;
  public listaMateriais = Array<any>();

  public itemExpanded: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getMaterialList() {
    let materialList = [
      {
        'codigo': '122304898',
        'descricao': 'CANETA ESFEROGRÁFICA AZUL',
        'qtd': 50,
        'lote': 121332,
        'estoque': 'FAEPU',
        'validade': '05/05/2019',
        'corredor': 1,
        'prateleira': 5
      },
      {
          'codigo': '124504898',
          'descricao': 'CANETA ESFEROGRÁFICA AZUL PONTA FINA VERMELHA',
          'qtd': 50,
          'lote': 121332,
          'estoque': 'FAEPU',
          'validade': '05/05/2019',
          'corredor': 1,
          'prateleira': 5
      },
      {
          'codigo': '124504899',
          'descricao': 'CANETA ESFEROGRÁFICA AZUL PONTA FINA VERMELHA',
          'qtd': 100,
          'lote': 121332,
          'estoque': 'FAEPU',
          'validade': '05/05/2019',
          'corredor': 1,
          'prateleira': 5
      }
    ];
    //Adicionar propriedade expanded para accordion
    return materialList.map((obj) => {
      obj['expanded'] = false;
      return obj;
    })
  }


  ionViewDidEnter() {
    this.pedidoId = this.navParams.get("numeroPedido");
    //Substituir por chamada de serviço
    this.listaMateriais = this.getMaterialList();

    console.log(this.listaMateriais);
  }

}
