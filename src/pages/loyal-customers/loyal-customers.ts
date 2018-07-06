import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-loyal-customers',
  templateUrl: 'loyal-customers.html',
})
export class LoyalCustomersPage {

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController, 
  public navParams: NavParams) {
  }

  getUsers(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    loading.dismiss();
  }
}
