import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import {HttpServiceProvider} from '../../providers/http-service/http-service'
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

  constructor( 
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private HttpServiceProvider:HttpServiceProvider
    ) {
    this.loginForm = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(4)] ],
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
  login(){
    var $this=this
    if($this.loginForm.valid){
      console.log(this.loginForm.value);
      let name = $this.user.name.replace(/\s+/g,"")
      let data = {
        principal: name,
        password: $this.user.password
      };
      $this.HttpServiceProvider.postFormData('http://xieku.longliqi.com/app/login.html',data)
      .subscribe(
        data => {
          this.navCtrl.push('mainpage');
          console.log(data);
        },
        err=>{}
      ) 
  }
  }

}
