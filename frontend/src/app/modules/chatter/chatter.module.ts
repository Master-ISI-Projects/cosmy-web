import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './components/conversation/conversation.component';
import { NgChatModule } from 'ng-chat';

@NgModule({
  declarations: [ConversationComponent],
  imports: [
    CommonModule,
    NgChatModule
  ],
  exports: [
    ConversationComponent
  ]
})
export class ChatterModule { }
