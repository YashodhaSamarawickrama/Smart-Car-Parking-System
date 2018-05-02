import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";

/**
 * Generated class for the AdminmaploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminmapload',
  templateUrl: 'adminmapload.html',
})
export class AdminmaploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminmaploadPage');
  }
  home(){
    this.navCtrl.push(WelcomePage);
  }

}
