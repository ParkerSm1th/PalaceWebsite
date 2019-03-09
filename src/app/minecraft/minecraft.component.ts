import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pl-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.scss']
})
export class MinecraftComponent implements OnInit {

  faUsers = faUsers;
  faIdCard = faIdCard;
  faCarSide = faCarSide;
  faTrophy = faTrophy;
  faMapMarkedAlt = faMapMarkedAlt;
  faHeadphones = faHeadphones;
  faWifi = faWifi;


  constructor() { }

  ngOnInit() {
  }

}
