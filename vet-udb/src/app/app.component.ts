import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router'
import { FirebaseService } from "./services/firebase.service"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router : Router,
    private menu : MenuController,
    public fireAuth : FirebaseService
  ) {
    this.initializeApp();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  darkTheme = false
  user : any

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.openMenu()
    });
  }

  openMenu() { this.menu.open(); }

  closeMenu() { this.menu.close(); }
  
  logOut(){
    this.fireAuth.SignOut().then(()=>{
      this.closeMenu()
      this.router.navigate(['login'])
    })
  }
}
