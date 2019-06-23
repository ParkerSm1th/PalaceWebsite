import { Component, OnInit } from '@angular/core';
import { parseString } from 'xml2js';
import { DataService } from '../jsonData/data.service';
// import { HomeService } from './home.service';



@Component({
  selector: 'pl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  news;

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.dataService.getNews().subscribe(data => {
      const news = data.results;
      this.news = news;
    });
  }


}
