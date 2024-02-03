import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonListItemService {
  constructor(private http: HttpClient) {}

  listar(url: string) {
    console.log(url);
    return this.http.get(url);
  }
}
