import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageFromParent: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sayToChild(message) {
    this.messageFromParent = message;
  }

  updateMessage(event) {
    console.log('holaaaaaa');
    this.message = event.message;
  }
}
