import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  messageInput;

  @Output()
  messageOutput = new EventEmitter();

  message: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.message = this.messageInput;
  }

  sayToParent(message) {
    this.messageOutput.emit({message: message});
  }
}
