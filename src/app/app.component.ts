import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //js syntax, key-value pairs as elements array
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a test'}];
  
}
