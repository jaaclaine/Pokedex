import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private http: HttpClient) {}

  private readonly API = 'https://pokeapi.co/api/v2/pokemon?limit=9';

  listar() {
    return this.http.get(this.API);
  }
}
