import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PokeAPI, Results, PokemonDetails } from 'src/interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit, OnDestroy {
  @Output() exportPokemons = new EventEmitter();
  pokemons: PokeAPI;
  pokemonsSub: Subscription;
  pokemonsLoaded: boolean;
  // query: string;
  // abilityFilters: Array<string>;
  // typeFilters: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsSub = this.pokemonService.getPokemon().subscribe(
      (data: PokeAPI) => {
        this.pokemons = data;
        console.log(this.pokemons.results);
        if (this.pokemons.results && this.pokemons.results.length) {
          // get pokemon details for every pokemon
          this.pokemons.results.forEach(pokemon => {
            // set pokemon id
            pokemon.id = pokemon.url.split('/')[
              pokemon.url.split('/').length - 2
            ];

            this.getPokemonDetails(pokemon);
            this.getPokemonSpeciesDetails(pokemon);
          });
        }
      }
    );
  }

  getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;
        // when last pokemon details have been loaded
        // send pokemons to header component
        if (pokemon.id === '151') {
          this.pokemonsLoaded = true;
          this.exportPokemons.emit(this.pokemons.results);
        }
      });
  }

  getPokemonSpeciesDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonSpecies(pokemon.name)
      .subscribe((species: any) => {
        const entries = species.flavor_text_entries;
        if (entries) {
          entries.some(flavor => {
            if (flavor.language.name === 'en') {
              pokemon.description = flavor.flavor_text;
            }
          });
        }
      });
  }

  ngOnDestroy() {
    this.pokemonsSub.unsubscribe();
  }
}
