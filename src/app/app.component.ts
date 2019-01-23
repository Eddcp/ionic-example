import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public events: Events) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.rootPage = this.verifyUserToken() ? HomePage : LoginPage;
      this.splashScreen.hide();
      this.listenToEvents();

    });
  }

  verifyUserToken() {
    return localStorage.getItem('token');
  }

  logout() {
    this.menuCtrl.close();
    this.events.publish('user:logout');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  listenToEvents() {
    this.events.subscribe('user:logout', () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userInformation');
      this.nav.setRoot(LoginPage);
    });
  }
}
