import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCharacters(pageIndex: number = 1, pageSizeOptions: number[] =  [10, 20, 50, 100, 200, 500]) {
    return this.http.get(`https://api.disneyapi.dev/characters/?page=${pageIndex}&per_page=${pageSizeOptions}`);
  }
}
