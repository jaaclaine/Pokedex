const ListaContainer = (props: any) => {
  const listaPokemon = props.lista;

  return (
    <>
      <h2>lista</h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", textAlign: "center" }}
      >
        {listaPokemon.map((pokemon: any, index: any) => {
          return (
            <div key={index} style={{ width: "300px", background: pokemon.color?.name }}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              />
              <br />
              {pokemon.id} - {pokemon.name} <br />
              {pokemon.color?.name} | {pokemon.egg_groups[0]?.name} |
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
