import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes;
  faInfoCircle = faInfoCircle;
  host = 'palace.network';

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

}
