![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge) ![Sass Badge](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge) ![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge) ![Angular Badge](https://img.shields.io/badge/Angular-0F0F11?logo=angular&logoColor=fff&style=for-the-badge)

Todos os créditos da inspiração desse README para o <a href="https://github.com/douglasabnovato/huntweb-swapi?tab=readme-ov-file">@douglasabnovato</a>

# Pokedex - Sobre o projeto

Projeto para consumir a API (https://pokeapi.co/) e exibir no frontend com Angular. A aplicação terá diversos filtros, campo de busca e página com as informações de cada Pokemon.

```json
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=3&limit=3",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ]
}
```

- Todas as informações do JSON estão dentro de outras request

```json
{
  "abilities": [
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ]
}
```

### Inspirações

- https://dribbble.com/shots/21646502-Pok-dex-Interaction
- https://dribbble.com/shots/21488745-Pok-dex-Web-Version-Redesign
- https://dribbble.com/shots/6545819-Pokedex-App
- https://dribbble.com/shots/4862523-Pokedex-iOS-app-Squirtle

### To-do List

- [ ] Fazer wireframe de como vou separar o projeto (layout básico)
- [ ] Melhores práticas de TypeScript
- [ ] Requisições assíncronas
- [ ] Acessar a API e fazer um esqueleto de como vou buscar cada informação necessária
- [ ] Componentização baseados no wireframe como esqueleto da aplicação com AngularJS
- [ ] Trabalhar no layout, deixando amigável, responsivo e acessível

#### Indo além:

- [ ] Scroll infinito
- [ ] Modo dark/light
- [ ] Montar a sua própria Pokedex (LocalStorage)
- [ ] Hospedar na Vercel
- [ ] Documentar como executar ambiente de produção e desenvolvimento

#

<p align="center"><img src="https://i.pinimg.com/originals/b9/e7/19/b9e719017084237d1406064dcdd6768a.gif"></p>
