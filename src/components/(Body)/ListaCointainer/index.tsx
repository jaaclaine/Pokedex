import axios from "axios";
import { useEffect, useState } from "react";

interface getPokemonList{
  name: string,
  url: string
}

const ListaContainer = () => {

  const [listaPokemons, setListaPokemon] = useState<getPokemonList[]>([]);
  const [listaPokemonDetails, setListaPokemonDetails] = useState<any[]>([]);

  // O useEffect é só chamado uma vez quando o componente é estanciado
  // O que tiver dentro da array ele aguarda mudança antes de executar
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(response => setListaPokemon(response.data.results))
  }, []);

  useEffect(() => {
    listaPokemons.map(pokemon => {
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
        .then(response => {setListaPokemonDetails(pokeList => [...pokeList, response.data])})
    })
  }, [listaPokemons]);

  return (
    <>
      <h2>lista</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", textAlign: "center" }}>
        {listaPokemonDetails.map((pokemon) => {
          return (
            <div key={pokemon.id} style={{maxWidth: "300px", background: pokemon.color.name}}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} /> <br/>
              {pokemon.id} - {pokemon.name} <br />
              {pokemon.color.name} | {pokemon.egg_groups[0].name} | {pokemon.habitat?.name} | {pokemon.shape?.name} <br />
              capture_rate: {pokemon.capture_rate}
            </div>
          )
        })}
      </div>

    </>
  );
}

export default ListaContainer;