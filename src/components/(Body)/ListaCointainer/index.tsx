import { render } from "@testing-library/react";
import "./listaContainer.css";

const ListaContainer = (props: any) => {
  const listaPokemon = props.lista;

  function renderId(param: any) {
    const number = param.toString().length;
    switch (number) {
      case 1:
        return `#000${param}`;
      case 2:
        return `#00${param}`;
      case 3:
        return `#0${param}`;
      case 4:
        return `#${param}`;
      default:
        return param;
    }
  }

  return (
    <>
      <h2>lista</h2>

      <div className="flex flex-wrap gap-4">
        {listaPokemon.map((pokemon: any, index: any) => {
          return (
            <div
              key={index}
              className={`card-${pokemon.color?.name} rounded-lg w-1/4 p-2 flex`}
            >
              <div className="w-1/2 flex justify-center items-center">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </div>
              <div className="w-1/2">
                <span className="w-full text-sm">{renderId(pokemon?.id)}</span> <br />
                <span className="w-full mb-4 capitalize font-bold text-2xl">
                  {pokemon?.name}
                </span>
                <br />
                <span className="rounded-md px-2 mr-2 mb-2 bg-slate-100/80 text-[14px] inline-block">
                  {pokemon.egg_groups[0]?.name}
                </span>
                <span className="rounded-md px-2 mr-2 mb-2 bg-slate-100/80 text-[14px] inline-block">
                  {pokemon.habitat?.name}
                </span>
                <span className="rounded-md px-2 mr-2 mb-2 bg-slate-100/80 text-[14px] inline-block">
                  {pokemon.shape?.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListaContainer;
