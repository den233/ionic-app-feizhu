import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myvalue: number = 2;
  constructor(public navCtrl: NavController) {

  }
  

}
