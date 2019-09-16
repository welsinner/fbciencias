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
      title: 'Meus Dados',
      url: '/meus-dados',
      icon: 'person'
    },
    {
      title: 'Usuários',
      url: '/usuarios',
      icon: 'people'
    },
    {
      title: 'Veículos',
      url: '/veiculos',
      icon: 'car'
    },
    {
      title: 'Reservas',
      url: '/reservas',
      icon: 'clipboard'
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
