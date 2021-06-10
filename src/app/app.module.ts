import { UsersService } from '../services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';

export const firebaseConfig = {
  apiKey: "AIzaSyCKXTCyRuc_kqFeCn3J2Qj9OsMsReHxrqg",
  authDomain: "ionicfirebase-73eab.firebaseapp.com",
  databaseURL: "https://ionicfirebase-73eab-default-rtdb.firebaseio.com",
  projectId: "ionicfirebase-73eab",
  storageBucket: "ionicfirebase-73eab.appspot.com",
  messagingSenderId: "997149053983",
  appId: "1:997149053983:web:2cc13fbefe959112b6b12a"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UsersService,AngularFireDatabase],
  bootstrap: [AppComponent],
})
export class AppModule {}
