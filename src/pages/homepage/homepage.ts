import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ 
  name: "homepage",
  segment: "homepage",
  defaultHistory: []
})
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  values = '';
    onKey(value: string) {
      this.values += value + ' | ';
  }
  value = '';
  onEnter(value: string) { this.value = value; }
  valueblur = '';
  update(value: string) { this.valueblur = value; }
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  clickMessage = '';
  onClickMe1() {
    this.clickMessage = 'You are my hero!';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
