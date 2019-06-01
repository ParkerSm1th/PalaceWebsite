import { Component, OnInit } from '@angular/core';
import { parseString } from 'xml2js';
// import { HomeService } from './home.service';



@Component({
  selector: 'pl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  parseString = parseString;

  constructor() { }

  ngOnInit() {
    // this.getUpdates();
  }

  // getUpdates(): void {
  //   this.dataService.getUpdate().subscribe(data => {
  //     parseString(data.toString(), function (err, result) {
  //       console.dir(result);
  //     });
  //   })
  // }

  // getNews() {
  //   this.homeService.getNews().subscribe(data => {
  //     parseString(data.toString(), (err, result) => {
  //       console.log(result);
  //     });
  //   });
  // }


}
