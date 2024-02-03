import { PokemonListItemService } from './../pokemon-list-item.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss',
})
export class PokemonListItemComponent {
  @Input() item = {
    name: 'pokemon name',
    url: 'www',
  };

  infoPoke: any = [];

  constructor(private service: PokemonListItemService) {}

  ngOnInit(): void {
    this.service.listar(this.item.url).subscribe((listaRecebida) => {
      this.infoPoke = listaRecebida;
      console.log(this.infoPoke);
    });
  }
}
