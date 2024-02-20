import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "../components/(Body)/Filter";
import ListaCointainer from "../components/(Body)/ListaCointainer";
import Header from "../components/Header";
import InfiniteScroll from "react-infinite-scroller";

interface getPokemonList {
  name: string;
  url: string;
}

const Home = () => {
  const [listaPokemons, setListaPokemon] = useState<getPokemonList[]>([]);
  const [listaPokemonDetails, setListaPokemonDetails] = useState<any[]>([]);
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=60&limit=60"
  );

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=60").then((response) => {
      setListaPokemon(response.data.results);
      setNext(response.data.next);
      setHasMore(true);
    });
  }, []);

  //---------------------------

  const [hasMore, setHasMore] = useState(false);

  async function loadFunc() {
    if (filterUrl.length === 0) {
      await axios.get(next).then((response) => {
        setListaPokemon(response.data.results);
        setNext(response.data.next);

        response.data.next === null ? setHasMore(false) : setHasMore(true);
      });
    } else {
      setHasMore(false);
    }
  }

  //-------------------------

  useEffect(() => {
    if (listaPokemons !== undefined) {
      listaPokemons.forEach((pokemon) => {
        const pokeUrlReplace = pokemon.url.includes("https://pokeapi.co/api/v2/pokemon/")
          ? pokemon.url.replace(
              "https://pokeapi.co/api/v2/pokemon/",
              "https://pokeapi.co/api/v2/pokemon-species/"
            )
          : pokemon.url;

        axios
          .get(`${pokeUrlReplace}`)
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

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      initialLoad={false}
      hasMore={hasMore}
      threshold={50}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Header />
      <Filter onCardClick={cardClick} />
      <ListaCointainer lista={listaPokemonDetails} />
    </InfiniteScroll>
  );
};

export default Home;
