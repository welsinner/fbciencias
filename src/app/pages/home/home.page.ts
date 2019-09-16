import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  itensMenu = [];
  
  constructor(private auth: AuthService,
    private router: Router,
    private navCtrl: NavController) {}
  
    ngOnInit(){
      this.user = null;
      this.itensMenu = this.auth.montarMenu().filter( item => { return item.url != '/home' });
    }

    navigateRootAnimated(url: string){
      this.navCtrl.setDirection("root", true);
      this.router.navigateByUrl(url);
    }
}
