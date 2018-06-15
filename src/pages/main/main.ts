import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//获取class
function getByClass(oParent, sClass){   
  if(oParent.getElementsByClassName){
      return oParent.getElementsByClassName(sClass);
  }else{
      var res = [];
      var re = new RegExp(' ' + sClass + ' ', 'i')
      var aEle = oParent.getElementsByTagName('*');
      for(var i = 0; i < aEle.length; i++){
          if(re.test(' ' + aEle[i].className + ' ')){
              res.push(aEle[i]);
          }
     }
  return res;
  }
}

 
 
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
  onScroll(){
    console.log(11)
  }
  go_order(){
    this.navCtrl.push('airpage', {
      'id': 'detailInfo'
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    var ionclass=getByClass(document, "silde-news");
    console.log(ionclass[0])
     
    //document.getElementById('fudong6').style.background= "#FFFFFF";
      //ionclass[0].style.transform="translate3d(0px, "+index+", 0px)";
      var aBox = getByClass(document, "silde-news");
      
      // for (var i=0;i<aBox.length;i++) {
      // aBox[i].style.background= "red";
      // }
    let index=0
    setInterval(()=>{
      index+=20;
      console.log(index)
      //aBox[0].style.background= "red";
      //aBox[0].style.transform="translate3d(0px, "+index+"px, 0px)";
    },5000)
 
  }

}
