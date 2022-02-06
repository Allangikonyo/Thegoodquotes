import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]

  constructor() { 
    this.articles = [
      new Article ('Angular', 'https//angular.io', 3)

    ]
    
  }
  
  // getting the value of title and link in HTML, when printed out
  add_article(title: HTMLInputElement, link:HTMLInputElement){
    this.articles.push(new Article(title.value, link.value ))
    title.value = ''
    link.value = ''
  }
}
