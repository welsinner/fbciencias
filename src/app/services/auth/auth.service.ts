import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.authEndpoint;
  authenticationState = true;
  user = null;

  pages = [
    {
      title: 'Tela Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Albert Einstein',
      url: '/einstein',
      icon: 'person'
    },
    {
      title: 'Computadores',
      url: '/computadores',
      icon: 'laptop'
    },
    {
      title: 'Profissões',
      url: '/profissoes',
      icon: 'briefcase'
    },
    {
      title: 'Sala de Aula',
      url: '/aulas',
      icon: 'school'
    }
  ];

  constructor(private platform: Platform,
    private storage: Storage) { }

  init() : Promise<void> {
    return this.platform.ready().then( () => {
      this.authenticationState = true;
    });
  }

  isAuthenticated() {
    return this.authenticationState;
  }

  montarMenu(){
    
      let itensMenu = [];
    
      this.pages.forEach(page => {
        itensMenu.push(page);
      });
    
      return itensMenu;
    }

}
