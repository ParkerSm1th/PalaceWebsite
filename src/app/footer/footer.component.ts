import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'pl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright: string;
  year: number;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faDiscord = faDiscord;



  constructor() { }

  ngOnInit() {
    this.copyright = 'Copyright &copy; Palace Network';
    this.year = Date.now();
  }

}
