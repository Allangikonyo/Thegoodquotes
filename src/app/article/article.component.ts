import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[]

  constructor() { 
    this.articles = [
      new Article ('Angular', 'https//angular.io', 3)

    ]
    
  }

  ngOnInit(): void {
  }
}
