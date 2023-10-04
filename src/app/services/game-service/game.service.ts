import { Injectable } from '@angular/core';
import { Game } from './models/game';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from '../message_service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GameService {

  private gamesUrl = 'api/games';

  constructor(private messageService: MessageService, private http: HttpClient,) {
  }

  public fetchGames(): Observable<Game[]> {
    this.log('Game Service: fetch games method call');
    return this.http.get<Game[]>(this.gamesUrl).pipe(tap(_ => this.log('fetched games')),
      catchError(this.handleError<Game[]>('getGames', []))
    );
  }
  public fetchGameByID(id: number): Observable<Game> {
    this.log(`Game Service: fetch game by ${id} method call`);
    return this.http.get<Game>(`${this.gamesUrl}/${id}`).pipe(tap(_ => this.log('fetched games')), catchError(this.handleError<Game>('getGame',)));
  }

  public updateGame(game: Game): Observable<any> {
    return this.http.put(this.gamesUrl, game, httpOptions).pipe(
      tap(_ => this.log(`updated game id=${game.id}`)),
      catchError(this.handleError<any>('updateGame'))
    );
  }
  public addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game, httpOptions).pipe(
      tap((newGame: Game) => this.log(`added game w/ id=${newGame.id}`)),
      catchError(this.handleError<Game>('addGame'))
    );
  }
  public deleteGame(game: Game | number): Observable<Game> {
    const id = typeof game === 'number' ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;

    return this.http.delete<Game>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted game id=${id}`)),
      catchError(this.handleError<Game>('deleteGame'))
    );
  }

  public searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Game[]>(`${this.gamesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found games matching "${term}"`)),
      catchError(this.handleError<Game[]>('searchGames', []))
    );
  }


  private log(message: string) {
    this.messageService.send(`GameService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};