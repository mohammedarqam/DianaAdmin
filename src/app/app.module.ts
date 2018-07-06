import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyA7bn46-7NyCztVM7RPg2OVfkV75udiCqA",
  authDomain: "cafediana-codebro.firebaseapp.com",
  databaseURL: "https://cafediana-codebro.firebaseio.com",
  projectId: "cafediana-codebro",
  storageBucket: "cafediana-codebro.appspot.com",
  messagingSenderId: "1040616558486"
});




@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
