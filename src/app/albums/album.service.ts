import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Import the Album type
import { Album } from '../types/album';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private albumsUrl = 'api/albums'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Inject "HttpClient" into the Album Service
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // GET: albums from the server
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl).pipe(
      tap((_) => this.log('fetched albums')),
      catchError(this.handleError<Album[]>('getAlbums', []))
    );
  }

  // GET album by ID - Will 404 if no id is found
  getAlbum(id: string): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url);
  }

  // SAVE METHODS

  // POST: Add a new Album to the server
  addAlbum(newAlbum: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, newAlbum, this.httpOptions);
  }

  // DELETE: album by Id from the server
  deleteAlbum(id: string): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;

    return this.http.delete<Album>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted album id=${id}`)),
      catchError(this.handleError<Album>('deleted album'))
    );
  }

  // PUT: update the album on the server
  updateAlbum(_id: string, album: Album): Observable<any> {
    return this.http.put(this.albumsUrl, album, this.httpOptions).pipe(
      tap((_) => this.log(`updated album id=${album.id}`)),
      catchError(this.handleError<any>('update album'))
    );
  }

  // Handle HTTP operation that failed
  // let the app continue
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by return an empty result
      return of(result as T);
    };
  }

  // Log a AlbumService message with the MessageService
  private log(message: string) {
    this.messageService.add(`AlbumService: ${message}`);
  }
}
