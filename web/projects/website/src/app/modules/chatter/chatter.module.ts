import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './components/conversation/conversation.component';
import { NgChatModule } from 'ng-chat';
import  {  HttpClientModule  }  from  '@angular/common/http' ;
@NgModule({
  declarations: [
    ConversationComponent
  ],
  imports: [
    CommonModule,
    NgChatModule,
    HttpClientModule
  ],
  exports: [
    ConversationComponent
  ]
})
export class ChatterModule { }
