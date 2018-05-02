import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CheckAvailabilityPage} from  "../check-availability/check-availability";
import {AdminpanelPage}from "../adminpanel/adminpanel";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  check(){
    this.navCtrl.push(CheckAvailabilityPage);
  }
  admin(){
    this.navCtrl.push(AdminpanelPage);
  }
}
