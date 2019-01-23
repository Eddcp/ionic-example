import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user:string;
  public password:string;

  constructor(
    private loginProvider: LoginProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private toast: ToastController) {
  }

  login() {
    let loading= this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    this.loginProvider.login(this.user, this.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Bem vindo: ' + result.nomeCompleto, position: 'botton', duration: 3000 }).present();
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        loading.dismiss();
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.statusText, position: 'botton', duration: 3000 }).present();
      });
  }

}
