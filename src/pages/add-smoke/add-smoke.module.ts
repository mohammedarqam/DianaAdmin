import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSmokePage } from './add-smoke';

@NgModule({
  declarations: [
    AddSmokePage,
  ],
  imports: [
    IonicPageModule.forChild(AddSmokePage),
  ],
})
export class AddSmokePageModule {}
