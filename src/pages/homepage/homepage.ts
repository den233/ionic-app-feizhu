import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, AbstractControl, Validators} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../../providers/validator/validator";
import { HEROES } from '../../views/hero';
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
  valid(c: AbstractControl): {[key: string]: any} {
    return {"a": "b"};
  }
  heroes = HEROES;
  master = 'Master';
  formModel: FormGroup;
  constructor(fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    })
  }
   
  values = '';
    onKey(value: string) {
      this.values += value + ' | ';
  }
  value = '';
  onEnter(value: string) { this.value = value; }
  valueblur = '';
  update(value: string) { this.valueblur = value; }
  heroes1 = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes1.push(newHero);
    }
  }
  clickMessage = '';
  onClickMe1() {
    this.clickMessage = 'You are my hero!';
  }
  toggle=false;
  toggleZippy() {
    this.toggle = !this.toggle;
  }
  major = 1;
  minor = 23;

  newMinor1() {
    this.minor++;
  }

  newMajor1() {
    this.major++;
    this.minor = 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
