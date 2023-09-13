import { Injectable } from '@angular/core';
import { HEROES, Hero } from './models/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message_service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
    this.messageService = messageService;
  }

  fetchHeroes(): Observable<Hero[]> {
    this.messageService.send('Hero Service: fetch heroes method call');
    return of(HEROES);
  }
}
