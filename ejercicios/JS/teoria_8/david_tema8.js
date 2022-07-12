//Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.

async function listaPeliculas() {
    let jsonResultados = await fetch(`https://swapi.dev/api/films/`)
        .then((respuesta) => respuesta.json())
    //.then(());
    let listaPeliculas = jsonResultados.results
    let peliculas = listaPeliculas.map(film => {
        return film.title
    });
    let anos = listaPeliculas.map(film => {
        return parseInt(film.release_date.split("-")[0])
    });

    return { ejeX: peliculas, ejeY: anos }

}


//En el eje X el nombre de la película
//En el eje Y año de publicación
//API ENDPOINT --> https://swapi.dev/api/films/

listaPeliculas().then(respuesta => {

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: respuesta.ejeX,
            datasets: [{
                label: '# Peliculas',
                data: respuesta.ejeY,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    'first-y-axis': {
                        type: 'time'
                    }
                }
            }
        }
    });

})

// Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
// En el eje X el nombre del personaje
// En el eje Y el número de películas en las que ha participado.
// API ENDPOINT --> https://swapi.dev/api/people/

async function listaPersonajes() {
    let jsonResultados = await fetch(`https://swapi.dev/api/people/`)
        .then((respuesta) => respuesta.json())
    //.then(());
    let fichaPersonajes = jsonResultados.results
    let personajes = fichaPersonajes.map(actor => {
        return actor.name
    });
    let peliculas = fichaPersonajes.map(numero => {
        return numero.films
    }); numeroPeliculas = Object.values(peliculas).map(element => {
        return element.length

    });

    return { ejeX: personajes, ejeY: numeroPeliculas }

}

listaPersonajes().then(respuesta => {

    const ctx = document.getElementById('personajes');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: respuesta.ejeX,
            datasets: [{
                label: '# Personajes',
                data: respuesta.ejeY,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    'first-y-axis': {
                        type: 'line'
                    }
                }
            }
        }
    });
})

