import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',  
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon!: IPokemon[];
  @ViewChild("dt1") list!: Table;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe({next: (pokemon: IPokemon[]) => this.pokemon = pokemon, error: (err: Error) => console.error(err)})
    
  }

  clear(table:Table){
    table.clear()
    console.log(this.pokemon[0]);
  }

  globalFilter($event:Event, filterType:String){
    this.list.filterGlobal(($event.target as HTMLInputElement).value, filterType)
  }

  filterByType($event: Event, filterColumn: string, filterType: string){
    this.list.filter(($event.target as HTMLInputElement).value, filterColumn, filterType);
  }
}
