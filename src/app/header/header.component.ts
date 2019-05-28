import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { faInfoCircle, faPlayCircle, faStore, faServer } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'pl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes;
  faInfoCircle = faInfoCircle;
  faTwitter = faTwitterSquare;
  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faPlayCircle = faPlayCircle;
  faStore = faStore;
  faServer = faServer;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.routes = [
      {
        route: 'home',
        name: 'Home'
      },
      {
        route: 'community',
        name: 'Community'
      },
      {
        route: 'parks',
        name: 'Theme Parks',
      },
      /*{
        route: 'mini-games',
        name: 'Mini Games'
      },*/
      {
        route: 'creative',
        name: 'Creative',
      },
      /*{
        route: 'players',
        name: 'Players'
      },*/
    ];
  }
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
      if (window.pageYOffset > 150) {
        const element = document.getElementById('header');
        element.classList.add('fixed');
      } else {
        const element = document.getElementById('header');
        element.classList.remove('fixed');
      }
    }
  // @HostListener('window:scroll', ['$event'])
  //   onWindowScroll(e) {
  //   if (window.pageYOffset > 100) {
  //     const element = document.getElementById('header');
  //     element.classList.add('fixed');
  //   } else {
  //     const element = document.getElementById('header');
  //     element.classList.remove('fixed');
  //   }
  // }

}
