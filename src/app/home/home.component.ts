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
  recentNews;

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.getNews();
    this.getRecentNews();
  }

  // getNews() {
  //   this.dataService.getNews().subscribe(data => {
  //     const news = data.results;
  //     this.news = news;
  //   });
  // }
  getNews() {
    this.dataService.getNews().subscribe(data => {
      const news = data.results.slice(0, 3);
      const regex = /(<([^>]+)>)/ig
      console.log(news)
      news.forEach(element => {
        element.firstPost.content = element.firstPost.content.replace(regex, '').slice(0, 170);
      });
      this.news = news;
    });
  }
  getRecentNews() {
    this.dataService.getNews().subscribe(data => {
      const news = data.results.slice(0, 1);
      this.recentNews = news;
    });
  }


}
