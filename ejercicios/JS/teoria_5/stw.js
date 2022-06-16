//todas las imagenes de una raza
/* fetch('https://dog.ceo/api/breed/bulldog/images')
    .then(res => res.json())
    .then(data => console.log(data)) */

//imagen aleatoria de todas las razas
/* fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
 */
//listado de todas las razas
/* fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => console.log(data)) */

//listado de razas sin subrazas
function mostrarRazas() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(function listar(res) {
            let lista = JSON.stringify(res.message)
            console.log(res.message)
            let razasFiltradas = lista.filter()
            document.getElementById("razas").innerHTML = lista;
        })
}