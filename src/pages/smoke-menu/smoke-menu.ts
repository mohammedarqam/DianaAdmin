import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-smoke-menu',
  templateUrl: 'smoke-menu.html',
})
export class SmokeMenuPage {

  AddSmoke = "AddSmokePage";
  menuRef= firebase.database().ref("Smoke Menu/");
  public smokeItems : Array<any> = [];
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
      this.smokeItems = [];
      itemSnapshot.forEach(itemSnap => {
        this.smokeItems.push(itemSnap.val());
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }


}
