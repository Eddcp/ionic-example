import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderListPage } from '../pages/order-list/order-list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { TokenInterceptorProvider } from '../providers/token-interceptor/token-interceptor';
import { MaterialListPageModule } from '../pages/material-list/material-list.module';
import { OrderListProvider } from '../providers/order-list/order-list';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    OrderListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    HttpModule,
    HttpClientModule,
    MaterialListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    OrderListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorProvider, multi: true},
    OrderListProvider
  ]
})
export class AppModule {}
