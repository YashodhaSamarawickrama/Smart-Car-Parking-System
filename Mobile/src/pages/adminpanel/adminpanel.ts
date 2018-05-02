import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminQrPage} from "../admin-qr/admin-qr";
import {AdminmaploadPage}from "../adminmapload/adminmapload";
import {WelcomePage} from "../welcome/welcome";


/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpanel',
  templateUrl: 'adminpanel.html',
})
export class AdminpanelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpanelPage');
  }
  readqr(){
    this.navCtrl.push(AdminQrPage);
  }
  loadmap(){
    this.navCtrl.push(AdminmaploadPage);
  }
  home(){
    this.navCtrl.push(WelcomePage);
  }
}
