//Utilizando la api de Pokemons https://pokeapi.co/ y usando sólo async/await:

//Obtener un Pokemon de manera aleatoria (fetch)

const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));
let soluciones = [];
async function ObtenerPokemons() {
    let apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    let propiedadesPokemon = await apiPokemon.json()   // let miMap = new Map();
    let datosPokemon = await propiedadesPokemon.results;

      //let imagenPokemon
    let NumeroPokemonAleatorio = await Math.floor(Math.random()*Object.keys(propiedadesPokemon.results).length);
    let pokemonAleatorio = datosPokemon[NumeroPokemonAleatorio]
    //Obtener nombre del Pokémon
    soluciones.push(pokemonAleatorio.name)
   // Solucion Ejercicio 1: return pokemonAleatorio

 //Ejercicio 2: Obten su imágen correspondiente  
    let fichaPokemon = await fetch (pokemonAleatorio.url)
    let galeriaPokemon = await fichaPokemon.json()
    let imagenPokemon = await galeriaPokemon.sprites.front_default;
    soluciones.push(imagenPokemon)
    // Solucion Ejercicio 2: return imagenPokemon
    
return soluciones
}
ObtenerPokemons().then(pokemon => {
    console.log("Soluciones", pokemon); 
});


//Dibujar nombre e imágen del Pokémon en el DOM
function mostrarDOM(){

    document.getElementsByTagName('head').innerHTML='<script>window.onload = document.write("<img src="' + imagenPokemon + 'alt="' + pokemonAleatorio.name + ' + >)</script> ';
    }

//OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses)

