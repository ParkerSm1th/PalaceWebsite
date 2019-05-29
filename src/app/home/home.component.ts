import { Component, OnInit } from '@angular/core';
import { parseString } from 'xml2js';
import { DataService } from '../jsonData/data.service';



@Component({
  selector: 'pl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  parseString = parseString;

  constructor(private dataService: DataService) { }

  getUpdates(): void {
    this.dataService.getUpdate().subscribe(data => {
      parseString(data.toString(), function (err, result) {
        console.dir(result);
      });
    })
  }

  ngOnInit() {
    this.getUpdates();
  }


}
