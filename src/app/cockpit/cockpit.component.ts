import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //properties created (to become an event with eventemiiter)
  //between <> you define what event data type you going to emit
  @Output()serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated')blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //it would give us the element with all its properties
    console.log(nameInput);
    // would give us the value of the input since it has a value, otherwise depending on which element we place it on, not all have the same properites
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
