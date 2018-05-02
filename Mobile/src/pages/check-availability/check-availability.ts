import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MaploadPage }from "../mapload/mapload";
import {WelcomePage} from "../welcome/welcome";

/**
 * Generated class for the CheckAvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-availability',
  templateUrl: 'check-availability.html',
})
export class CheckAvailabilityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckAvailabilityPage');
  }
  mapload(){
    this.navCtrl.push(MaploadPage);
  }
  home(){
    this.navCtrl.push(WelcomePage);
  }
}
