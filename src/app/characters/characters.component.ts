import { HttpService } from './../http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Disneydata } from './disneydata';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  data: Disneydata;

  constructor(private gd:HttpService) { }

  ngOnInit(): void {
    this.gd.getCharacters().subscribe(resp => {this.data = resp});
  }
}
