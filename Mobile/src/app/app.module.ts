import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from "../pages/signup/signup";
import {MaploadPage }from '../pages/mapload/mapload';
import {CheckAvailabilityPage}from '../pages/check-availability/check-availability';
import {AdminmaploadPage}from '../pages/adminmapload/adminmapload';
import {AdminQrPage}from '../pages/admin-qr/admin-qr';
import {AdminpanelPage}from "../pages/adminpanel/adminpanel";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { QRScanner} from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MaploadPage,
    CheckAvailabilityPage,
    AdminmaploadPage,
    AdminQrPage,
    AdminpanelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MaploadPage,
    CheckAvailabilityPage,
    AdminmaploadPage,
    AdminQrPage,
    AdminpanelPage

  ],
  providers: [
    StatusBar,
    QRScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
