const containerPokemon = document.querySelector('.containerPokemon');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function fetchPokemon(id){
  fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/')
  .then((res)=>res.json())
  .then((data) =>crearPokemon(data));
}

function crearPokemon(pokemon) {
  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.classList.add('img-pokemon');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const numero = document.createElement('p');
  numero.classList.add('numero-pokemon');
  numero.textContent = '#'+pokemon.id.toString().padStart(3,0);

  const nombre = document.createElement('p');
  nombre.classList.add('nombre-pokemon');
  nombre.textContent = pokemon.name;

  const info = document.createElement('p');
  info.classList.add('info-pokemon');
  info.textContent = 'Con una altura de '+(pokemon.height/10).toString()+' metros y un peso de '+(pokemon.weight/10).toString()+' kg.';

  containerPokemon.appendChild(spriteContainer);
  containerPokemon.appendChild(numero);
  containerPokemon.appendChild(nombre);
  containerPokemon.appendChild(info);
}

fetchPokemon(getRandomInt(1,895));