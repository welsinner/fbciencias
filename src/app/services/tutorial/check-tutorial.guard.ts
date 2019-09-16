import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TutorialService } from './tutorial.service';

@Injectable({
  providedIn: 'root'
})
export class CheckTutorialGuard implements CanActivate {

  constructor(
    private navCtrl: NavController,
    private tutorialService: TutorialService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(state.root.queryParams.force){
        return true;
      }

      return this.tutorialService.isTutorialOK().then(res => {
        if (res) {
          this.navCtrl.navigateRoot('/home');
          return false;
        } else {
          return true;
        }
      });

  }
}