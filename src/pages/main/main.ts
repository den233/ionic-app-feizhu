import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ 
  name: "mainpage",
  segment: "mainpage",
  defaultHistory: []
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  detail(){
    console.log(1)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
