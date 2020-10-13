import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router : Router,
    private menu : MenuController
  ) {
    this.initializeApp();
  }

  darkTheme = false

  ngOnInit(){ }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeTheme(){
    console.log(this.darkTheme)
    this.darkTheme = !this.darkTheme
    console.log(this.darkTheme)
  }

  openMenu() {
    this.menu.open();
  }

  closeMenu() {
    this.menu.close();
  }
}
