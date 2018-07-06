import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html',
})
export class AddMenuPage {
  menuRef = firebase.database().ref("Food Menu");
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
      this.presentToast("Menu Item Added");
    }).then(()=>{
      this.navCtrl.setRoot("MenuPage");
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
