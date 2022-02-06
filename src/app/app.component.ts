import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // getting the value of title and link in HTML, when printed out
  add_article(title: HTMLInputElement, link:HTMLInputElement){
    console.log(title.value)
  }
}
