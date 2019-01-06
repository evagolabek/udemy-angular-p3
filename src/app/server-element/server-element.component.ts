import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //viewencapsulation-Emulated is default , None would make the css of this component being applied globally, Native uses shadow dom technology,for certain browsers only
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit {
  //type definition for a property that we want to use in our html 
  //input exposes this property to parent component or any component that is hosting our serverElement
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
