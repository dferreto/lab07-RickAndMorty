import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodios } from '../Models/Episodios';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

    constructor(private http: HttpClient) {}

  getAll(): Observable<Episodios[]> {
    return this.http.get<Episodios[]>('https://rickandmortyapi.com/api/episode').pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
  
}