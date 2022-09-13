import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './IPokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getAllPokemon(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>("https://localhost:7216/pokemon")
  }

}