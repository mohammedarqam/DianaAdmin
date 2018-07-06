import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-add-smoke',
  templateUrl: 'add-smoke.html',
})
export class AddSmokePage {

  menuRef = firebase.database().ref("Smoke Menu");
  itemName : string;
  itemPrice : string;

  constructor(
  public navCtrl: NavController,
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public navParams: NavParams) {
  }


  addItem(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.menuRef.push({
      Name : this.itemName,
      Price : this.itemPrice
    }).then(()=>{
      this.presentToast("Smoke Item Added");
    }).then(()=>{
      this.navCtrl.setRoot("SmokeMenuPage");
      loading.dismiss();
    });
  }

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'b0ttom'
  });

  toast.present();
}

}
