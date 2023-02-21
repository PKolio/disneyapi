import { HttpService } from './../http.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  displayedColumns: string[] = [
    'CharacterName',
    'TvShows',
    'VideoGames',
    'Allies',
    'Enemies',
  ];
  dataSource;
  paginatorConfig: {
    items_count: number,
    total_items: number,
    pageSizeOptions: number[]
  }

  // pageSizeOptions: [10, 20, 50, 100, 200, 500];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getCharList();
  }

  getCharList(pageIndex?: number, pageSizeOptions?: number[]) {
    this.http.getCharacters(pageIndex, pageSizeOptions)
      .subscribe((resp: any) => {
        this.dataSource = new MatTableDataSource(resp.data);
        this.paginatorConfig = {
          items_count: resp.count,
          total_items: resp.count * resp.totalPages,
          pageSizeOptions: [10, 20, 50, 100, 200, 500]
        };
      });
  }

  //Search and find desired character
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginatorChanges(event) {
    this.getCharList(event.pageIndex + 1);
    this.getCharList(event.pageSizeOptions);
  }
}
