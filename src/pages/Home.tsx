import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "../components/(Body)/Filter";
import ListaCointainer from "../components/(Body)/ListaCointainer";
import Header from "../components/Header";

interface getPokemonList {
  name: string;
  url: string;
}

const Home = () => {
  const [listaPokemons, setListaPokemon] = useState<getPokemonList[]>([]);
  const [listaPokemonDetails, setListaPokemonDetails] = useState<any[]>([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=60").then((response) => {
      setListaPokemon(response.data.results);
      setNext(response.data.next);
    });
  }, []);

  useEffect(() => {
    if (listaPokemons != undefined) {
      listaPokemons.map((pokemon) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
          .then((response) => {
            setListaPokemonDetails((pokeList) => [...pokeList, response.data]);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }
  }, [listaPokemons]);

  //---------------------------

  const [filterUrl, setFilterUrl] = useState("");

  useEffect(() => {
    if (filterUrl.length > 0) {
      axios.get(`${filterUrl}`).then((response) => {
        setListaPokemonDetails([]);
        setListaPokemon(response.data.pokemon_species);
      });
    }
  }, [filterUrl]);

  const cardClick = (pokeFilterUrl: string) => {
    setFilterUrl(pokeFilterUrl);
  };

  //---------------------------

  const bottomScroll = async function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      await axios.get(`${next}`).then((response) => {
        setNext(response.data.next);
        setListaPokemon(response.data.results);
      });
    }
  };
  window.addEventListener("scroll", bottomScroll);

  return (
    <div>
      {filterUrl ? filterUrl : next}
      <Header />
      <Filter onCardClick={cardClick} />
      <ListaCointainer lista={listaPokemonDetails} />
    </div>
  );
};

export default Home;
