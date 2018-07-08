import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoyaltyPendingPage } from './loyalty-pending';

@NgModule({
  declarations: [
    LoyaltyPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(LoyaltyPendingPage),
  ],
})
export class LoyaltyPendingPageModule {}
