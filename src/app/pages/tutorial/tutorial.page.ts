import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, NavController, Platform } from '@ionic/angular';
import { TutorialService } from 'src/app/services/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  showSkip = true;
  isDesktop = true;

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(
    private navCtrl: NavController,
    private tutorialService: TutorialService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isDesktop = this.platform.is('desktop');
    });
  }

  startApp() {
    this.navCtrl
      .navigateRoot('/home')
      .then(() => this.tutorialService.setTurorialOK());
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  slideNext() {
    this.slides.slideNext();
  }

}
