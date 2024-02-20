import "./listaContainer.css";

const ListaContainer = (props: any) => {
  const listaPokemon = props.lista;

  return (
    <>
      <h2>lista</h2>

      <div className="flex flex-wrap gap-4">
        {listaPokemon.map((pokemon: any, index: any) => {
          return (
            <div
              key={index}
              className={`card-${pokemon.color?.name} rounded-lg w-1/4 text-center`}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="block mx-auto h-24 mb-4"
              />
              {pokemon?.id} - {pokemon?.name} <br />
              {pokemon.color?.name} | {pokemon.egg_groups[0]?.name} |{" "}
              {pokemon.habitat?.name} | {pokemon.shape?.name} <br />
              capture_rate: {pokemon?.capture_rate}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListaContainer;
