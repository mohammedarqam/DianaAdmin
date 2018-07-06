import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  AddMenu = "AddMenuPage";
  menuRef= firebase.database().ref("Food Menu/");
  public menuItems : Array<any> = [];
  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,
  public actionSheetCtrl: ActionSheetController,
  public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.getMenu();
  }

  getMenu(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.menuRef.once('value', itemSnapshot => {
      this.menuItems = [];
      itemSnapshot.forEach(itemSnap => {
        this.menuItems.push(itemSnap.val());
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }


}
