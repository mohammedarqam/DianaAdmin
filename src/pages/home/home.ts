import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userRef= firebase.database().ref("Users/");
  public users : Array<any> = [];
  totUsers :number ;

  smokeMenuRef= firebase.database().ref("Smoke Menu/");
  public smokeItems : Array<any> = [];
  totSmokeItems : number;

  foodMenuRef= firebase.database().ref("Food Menu/");
  public foodItems : Array<any> = [];
  totFoodItems : number;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,
  ) {
  }

  ionViewDidEnter() {
    this.getUsers();
    this.getFoodMenu();
    this.getSmokeMenu();
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
        this.totUsers = this.users.length;
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;

  }

  getFoodMenu(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.foodMenuRef.once('value', itemSnapshot => {
      this.foodItems = [];
      itemSnapshot.forEach(itemSnap => {
        this.foodItems.push(itemSnap.val());
        this.totFoodItems = this.foodItems.length;
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }
  

  getSmokeMenu(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.smokeMenuRef.once('value', itemSnapshot => {
      this.smokeItems = [];
      itemSnapshot.forEach(itemSnap => {
        this.smokeItems.push(itemSnap.val());
        this.totSmokeItems = this.smokeItems.length;
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }
  


  gtOrdersPending(){
    this.navCtrl.setRoot("OrdersTabPage");
  }

  gtFoodMenu(){
    this.navCtrl.setRoot("MenuPage");
  }
  gtSmokeMenu(){
    this.navCtrl.setRoot("SmokeMenuPage");
  }
  gtUsers(){
    this.navCtrl.setRoot("CtabsPage");
  }
}
