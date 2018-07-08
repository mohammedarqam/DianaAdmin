import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";
  activePage: any;


  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform,) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: "HomePage", icon: "home" },
      { title: 'Food Menu', component: "MenuPage", icon: "pizza" },
      { title: 'Smoke Menu', component: "SmokeMenuPage", icon: "no-smoking" },
      { title: 'Customers', component: "CtabsPage", icon: "ios-people" },
      { title: 'Orders', component: "OrdersTabPage", icon: "md-mail" },
      { title: 'Balance Sheet', component: "BalanceSheetPage", icon: "ios-stats" },


    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }


}
