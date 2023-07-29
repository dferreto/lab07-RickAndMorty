import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { DatePipe } from '@angular/common';




//const ELEMENT_DATA: Productos[] = [];

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
  providers: [DatePipe]

})


export class EpisodiosComponent {
  displayedColumns: string[] = ['id', 'name', 'air_date','episode','created'];
  dataSource = new MatTableDataSource();


  constructor(private srvepisodios:EpisodiosService){

  }
  ngOnInit(){

    this.srvepisodios.getAll().subscribe((datos)=>{
      this.dataSource.data = datos;

    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}