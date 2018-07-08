import { Component } from '@angular/core';
import {IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'orders-tab.html',
})
export class OrdersTabPage {
  tab1Root = "OrdersPendingPage"
  tab2Root = "OrdersCompletedPage";

  constructor() {

  }
}


