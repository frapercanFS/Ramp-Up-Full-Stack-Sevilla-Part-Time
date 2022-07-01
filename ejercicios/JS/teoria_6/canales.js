
async function obtenerPokemonAleatorio(){
    let listaPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
    listaPokemons = await listaPokemons.json()
    listaPokemons = listaPokemons.results
    let indiceAleatorio = Math.floor(Math.random()*listaPokemons.length)
    let pokemonAleatorio = listaPokemons[indiceAleatorio]
    let propiedadesPokemon = await fetch(pokemonAleatorio.url)
    propiedadesPokemon = await propiedadesPokemon.json()
    
    return {name:pokemonAleatorio.name,sprites:propiedadesPokemon.sprites}
}

obtenerPokemonAleatorio().then(resultado => console.log(resultado))