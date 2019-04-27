import { Component, OnInit, HostListener } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'pl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes;
  faInfoCircle = faInfoCircle;
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faDiscord = faDiscord;

  constructor() { }

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
      {
        route: 'mini-games',
        name: 'Mini Games'
      },
      {
        route: 'creative',
        name: 'Creative',
      },
      {
        route: 'players',
        name: 'Players'
      },
      {
        route: 'support',
        name: 'Help & Support'
      }
    ];
  }
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   if (this.currentRoute === '/home') {
  //     if (window.pageYOffset > 100) {
  //       element.classList.add('fixed');
  //     } else {
  //       const element = document.getElementById('header');
  //       element.classList.remove('fixed');
  //     }
  //   }
  // }

}
