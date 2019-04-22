import { Component, OnInit } from '@angular/core';
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'pl-players-search',
  templateUrl: './players-search.component.html',
  styleUrls: ['./players-search.component.scss']
})
export class PlayersSearchComponent implements OnInit {

  faCoins = faCoins;
  faMoneyBillAlt = faMoneyBillAlt;
  faShoePrints = faShoePrints;
  faUsers = faUsers;
  faCar = faCar;
  faTrophy = faTrophy;
  faStar = faStar;

  constructor() { }

  ngOnInit() {
  }

}
