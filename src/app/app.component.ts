import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private navController: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(async() => {
      await this.statusBar.styleDefault();
      await this.splashScreen.hide(); 

      await this.showInitialScreen();
    });
  }

  async showInitialScreen() {
    const isInitialInstall = await this.storage.get('isInitialInstall') === null; 

    if (isInitialInstall) {
      this.router.navigate(['/onboarding']);
      // await this.navController.navigateForward('/onboarding');
      await this.storage.set('isInitialInstall', true);
      console.log(await this.storage.get('isInitialInstall'));
    } else {
      // await this.navController.navigateForward('/login');
      this.router.navigate(['/login']);
      console.log(await this.storage.get('isInitialInstall'));
    }    
  }
}
