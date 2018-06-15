import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
/**
 * Generated class for the AirlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ 
  name: "airpage",
  segment: "airpage",
  defaultHistory: []
})
@Component({
  selector: 'page-airline',
  templateUrl: 'airline.html',
})
export class AirlinePage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirlinePage');
  }

}
