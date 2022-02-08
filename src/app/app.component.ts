import { Component } from '@angular/core';
// import { url } from 'inspector';
import { Quote } from '../app/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[]

  myimage:string = "../assets/img/seashore1.jpeg";

  constructor() { 
    this.quotes = [
      new Quote('Shakespeare', 'To be or not to be', 3)

    ]
    
  }
  
  // getting the value of title and link in HTML, when printed out
  add_quote(username: HTMLInputElement, quote:HTMLInputElement){
    this.quotes.push(new Quote(username.value, quote.value ))
    username.value = ''
    quote.value = ''
  }

  // function that sorts articles
  
  sortedQuotes (): Quote[]{
    return this.quotes.sort ((a: Quote, b: Quote) => b.votes - a.votes)
  }
}
