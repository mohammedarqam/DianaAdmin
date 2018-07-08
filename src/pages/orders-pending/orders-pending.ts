import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-orders-pending',
  templateUrl: 'orders-pending.html',
})
export class OrdersPendingPage {

  ordersRef= firebase.database().ref("Orders/");
  public orders : Array<any> = [];
  public oitems : Array<any> = [];


  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController, 
  public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.getOrders();
  }

  getOrders(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.ordersRef.once('value', itemSnapshot => {
      this.orders = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.orders.push(temp);
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }

  orderDetails(items){
    this.navCtrl.push("OrderDetailsPage",{items : items});
  }

  }




