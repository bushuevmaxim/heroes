import { Component } from '@angular/core';
import { MessageService } from '../services/message_service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {
    this.messageService = messageService;
  }
}
