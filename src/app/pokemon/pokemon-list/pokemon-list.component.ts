import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon!: IPokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe({next: (pokemon: IPokemon[]) => this.pokemon = pokemon, error: (err: Error) => console.error(err)})
  }

}
