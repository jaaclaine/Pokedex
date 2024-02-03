import { TestBed } from '@angular/core/testing';

import { PokemonListItemService } from './pokemon-list-item.service';

describe('PokemonListItemService', () => {
  let service: PokemonListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
