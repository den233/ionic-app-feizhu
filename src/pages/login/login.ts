import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "login",
  segment: "login",
  defaultHistory: []
 }
)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm: FormGroup;
  togglePassword = "password";
  user = {
    name: "",
    password: "",
    checkcode: ""
  };
  constructor( private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required],
      islogin: [""]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  togglePwd() {
    if (this.togglePassword == "text") {
      this.togglePassword = "password";
    } else {
      this.togglePassword = "text";
    }
  }

}
