import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  send(message: string) {
    this.messages.push(message);
  }

  clearAll() {
    this.messages = [];
  }
}
