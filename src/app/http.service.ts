import { Disneydata } from './characters/disneydata';
 import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getCharacters():Observable<Disneydata>{
    return this.http.get<Disneydata>('https://api.disneyapi.dev/characters');
 }

}
