import { Component, OnInit } from '@angular/core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'pl-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.scss']
})
export class StafflistComponent implements OnInit {

  faTrophy = faTrophy;
  faIdCard = faIdCard;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
