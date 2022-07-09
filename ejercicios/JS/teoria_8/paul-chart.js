async function getListaPeliculas() {
  let ListaPeliculas = await fetch('https://swapi.dev/api/films/')
    .then((respueta) => (respueta.json()));
  let titulosDePeliculas = ListaPeliculas.results.map((film) => {
    return film.title

  });

  let años = ListaPeliculas.results.map((film) => {
    return parseInt(film.release_date.split("-")[0])

  });
  return { titulo: titulosDePeliculas, año: años }
}
async function getListaPersonajes() {
  let listaCharacters = await fetch('https://swapi.dev/api/films/')
    .then((respueta) => (respueta.json()));
  let apisDePersonajes = listaCharacters.results.map((film) => {
    return film.characters
  })

  return apisDePersonajes
}
let listaDePersonajes = [];
async function getPersonajes(url) {

  let personajeStar = await fetch(`${url}`)
    .then((respueta) => (respueta.json()));
  let nombrePersonaje = personajeStar.name
  listaDePersonajes.push(nombrePersonaje)

}
getListaPersonajes().then((respuesta) => respuesta.map((array) => array.map((personaje) => getPersonajes(personaje))).then((respuesta)=> console.log(respuesta)))



const arr = ["luke", "leya", "anakin", "darth vader", "leya", "anakin", "darth vader", "leya", "anakin", "darth vader"]
function resultado(array){ 
   array.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
}
console.log(resultado(arr))
const numeros = [[9, 8, 7, 6, 5, 4], [3, 4, 5, 6, 7, 8, 9]]

/* numeros.map((array)=> array.map((numeros) => console.log(numeros))) */
/* function sumaDeNumeros(array){
for(var i = 0; i < array.length; i++){
  for(var j = 0; j < array[i].length; j++){

      console.log(array[i][j]);
  }
}
}
sumaDeNumeros(numeros) */



/* getListaPeliculas().then((respuesta) => {
console.log(respuesta)


    const data = {
        labels: respuesta.titulo,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: respuesta.año,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
         
        }
      };
      
    const myChart = new Chart(
        document.getElementById('myChart'),
        config);
}) */


