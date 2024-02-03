import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '../pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  listaAPI: any = [];

  constructor(private service: PokemonListService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaRecebida) => {
      this.listaAPI = listaRecebida;
      console.log(this.listaAPI.results);
    });
  }
}
