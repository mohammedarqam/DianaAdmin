import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-loyalty-pending',
  templateUrl: 'loyalty-pending.html',
})
export class LoyaltyPendingPage {

  userRef= firebase.database().ref("Users/");
  public users : Array<any> = [];

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController, 
  public toastCtrl : ToastController,
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
        if(temp.Loyalty == "Pending"){
        this.users.push(temp);
        }
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }


  approve(key){
    this.userRef.child(key+"/Loyalty/").once('value',snapshot =>{
      console.log(snapshot.val());
    }).then(()=>{
      this.userRef.child(key+"/Loyalty/").set("Loyal").then(()=>{
        this.getUsers();
        this.presentToast("Customer made Loyal");
      });
    });
    }

  reject(key){
    this.userRef.child(key+"/Loyalty/").once('value',snapshot =>{
      console.log(snapshot.val());
    }).then(()=>{
      this.userRef.child(key+"/Loyalty/").set("Rejected").then(()=>{
        this.getUsers();
        this.presentToast("Customer rejected from Loyalty");
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



