import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCustomersPage } from './all-customers';

@NgModule({
  declarations: [
    AllCustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCustomersPage),
  ],
})
export class AllCustomersPageModule {}
