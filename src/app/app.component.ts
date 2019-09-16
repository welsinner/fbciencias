import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  itensMenu = [];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.auth.init().then( () => {
        this.splashScreen.hide();
      });

      this.montarMenu(this.auth.authenticationState);

    });
  }

  montarMenu(autenticado){
    
      this.itensMenu = [];
    
      if(autenticado){
        this.itensMenu = this.auth.montarMenu();
        this.menuCtrl.enable(true);
      } else {
        this.menuCtrl.enable(false);
      }
    
    }

  openTutorial() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/tutorial?force=true');
  }
}
