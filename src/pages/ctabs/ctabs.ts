import { Component } from '@angular/core';
import {IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'ctabs.html'
})
export class CtabsPage {

  tab1Root = "LoyaltyPendingPage"
  tab2Root = "LoyalCustomersPage";
  tab3Root = "AllCustomersPage";

  constructor() {

  }
}
