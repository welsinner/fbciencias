import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const TUTORIAL_OK = 'tutorial_ok';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(public storage: Storage) { }
  
    isTutorialOK(): Promise<any> {
      return this.storage.get(TUTORIAL_OK);
    }
  
    setTurorialOK(value?: boolean): Promise<any> {
      return this.storage.set(TUTORIAL_OK, value || true);
    }
}
