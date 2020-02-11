import { Component, OnInit } from '@angular/core';
import { MainAdapter } from '../../adapters/main.adapater';
import { ChatAdapter } from 'ng-chat';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  
  currentTheme = 'dark-theme';
  triggeredEvents = [];
  userId: string = "999";
  adapter: ChatAdapter = new MainAdapter();

  constructor() { }

  ngOnInit() {
  }

  onEventTriggered(event: string): void {
    this.triggeredEvents.push(event);
  }

}
