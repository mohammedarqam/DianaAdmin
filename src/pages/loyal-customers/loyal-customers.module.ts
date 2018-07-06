import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoyalCustomersPage } from './loyal-customers';

@NgModule({
  declarations: [
    LoyalCustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(LoyalCustomersPage),
  ],
})
export class LoyalCustomersPageModule {}
