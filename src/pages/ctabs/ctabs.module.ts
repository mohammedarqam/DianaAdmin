import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CtabsPage } from './ctabs';

@NgModule({
  declarations: [
    CtabsPage
  ],
  imports: [
    IonicPageModule.forChild(CtabsPage),
  ],
})
export class CtabsPageModule {}
