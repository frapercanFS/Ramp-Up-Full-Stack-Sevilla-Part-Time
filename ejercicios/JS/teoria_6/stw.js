async function obtenerPokemon() {
    let fetchPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await fetchPokemon.json()
    let todosLosPokemon = data.results
    let indiceAleatorio = Math.floor(Math.random() * todosLosPokemon.length)
    let pokemonAleatorio = todosLosPokemon[indiceAleatorio]
    let fetchImagen = await fetch(pokemonAleatorio.url)
    let dataImagen = await fetchImagen.json()
    let imagenPokemon = dataImagen.sprites.front_default
    nombrePokemon = pokemonAleatorio.name
    return pokemonFinal = [nombrePokemon, imagenPokemon]
}

async function mostrarPokemon() {
    let pokemonFinal = await obtenerPokemon();
    let p = document.createElement("p");
    p.innerHTML = pokemonFinal[0];
    document.getElementById("pokemon").appendChild(p)

    let img = document.createElement("img")
    img.src = pokemonFinal[1];
    document.getElementById("pokemon").appendChild(img)
}