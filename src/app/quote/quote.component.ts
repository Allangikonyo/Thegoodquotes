import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input () quote!: Quote

  vote_up(){
    this.quote.voteUp()
  }

  vote_down(){
    this.quote.voteDown()
  }
  
  // quotes: Quote[]

  // constructor() { 
  //   this.quotes = [
  //     new Quote('Quote 1', 'blah', 3),
  //     new Quote('Quote 1', 'blah', 3),
  //     new Quote('Quote 1', 'blah', 3),
  //   ]
  // }
  

  ngOnInit(): void {
  }

}
