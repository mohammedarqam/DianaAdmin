import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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
  public toastCtrl : ToastController,
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
        var temp  = itemSnap.val();
        temp.key = itemSnap.key;
        if(temp.Loyalty == "Loyal"){
        this.users.push(temp);
        }
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }

  revoke(key){
    this.userRef.child(key+"/Loyalty/").once('value',snapshot =>{
      console.log(snapshot.val());
    }).then(()=>{
      this.userRef.child(key+"/Loyalty/").set("Rejected").then(()=>{
        this.presentToast("Customer's Loyalty Revoked");
        this.getUsers();
      });
    });

  }


  makePending(key){
    this.userRef.child(key+"/Loyalty/").once('value',snapshot =>{
      console.log(snapshot.val());
    }).then(()=>{
      this.userRef.child(key+"/Loyalty/").set("Pending").then(()=>{
        this.presentToast("Customer's Loyalty set to Pending");
        this.getUsers();
      });
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
