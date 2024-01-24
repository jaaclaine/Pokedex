const linkAPIMain = "https://pokeapi.co/api/v2/pokemon/?limit=150";
let pokemonList = [];
const divPoke = document.querySelector("#pokeResult");

async function getBusca(url) {
  const resposta = await fetch(url);
  const list = await resposta.json();
  return list;
}

async function criarLista() {
  let listaPokemon = await getBusca(linkAPIMain);
  listaPokemon = listaPokemon.results;

  listaPokemon.forEach((pokemon) => {
    let infoPokemon = getBusca(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
    );
    infoPokemon.then(function (resultPokemon) {
      if (!resultPokemon.evolves_from_species) {
        let info = getBusca(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        info.then(function (itemPokemon) {
          divPoke.innerHTML += `
            <div style="text-align: center; justify-items: center; background: #f5f5f5; padding: 15px; margin: 10px">
              <img src="${itemPokemon.sprites.front_default}"> <br>
              <h3>${itemPokemon.name}</h3>
              ${itemPokemon.stats
                .map((stats) => {
                  return `<b>${stats.stat.name}:</b> ${stats.base_stat} <br>`;
                })
                .join("")} <hr>
                ${itemPokemon.types
                  .map((type) => {
                    return `<b>${type.type.name}</b> `;
                  })
                  .join("| ")} <hr>
                  ${resultPokemon.color.name}
            </div>
          `;
        });
      }
    });
  });
}

criarLista();
