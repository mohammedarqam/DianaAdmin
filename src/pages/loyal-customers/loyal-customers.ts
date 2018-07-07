import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-loyal-customers',
  templateUrl: 'loyal-customers.html',
})
export class LoyalCustomersPage {

  userRef= firebase.database().ref("Users/");
  public users : Array<any> = [];

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController, 
  public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.getUsers();
  }

  getUsers(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userRef.once('value', itemSnapshot => {
      this.users = [];
      itemSnapshot.forEach(itemSnap => {
        this.users.push(itemSnap.val());
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }
}
