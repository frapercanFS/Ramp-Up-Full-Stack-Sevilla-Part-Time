form.addEventListener('submit', (event) => {
    event.preventDefault();
    guardarNombre(name.value);
    guardarEmail(email.value);
    guardarMensaje(mensaje.value);
    guardarFoto(url.value);
    mostrarDatos();
})

const form = document.getElementById('form');

function guardarNombre(name) {
    localStorage.setItem('name', JSON.stringify(name));
    console.log(name);
}

function guardarEmail(email) {
    localStorage.setItem('email', JSON.stringify(email));
}
function guardarMensaje(mensaje) {
    localStorage.setItem('mensaje', JSON.stringify(mensaje));
}

function guardarFoto(foto) {
    localStorage.setItem('url', JSON.stringify(url));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    guardarNombre(name.value);
    guardarEmail(email.value);
    guardarMensaje(mensaje.value);
    guardarFoto(url.value);
})

mostrarDatos => {
    const name = JSON.parse(localStorage.getItem('name'));
    const email = JSON.parse(localStorage.getItem('email'));
    const mensaje = JSON.parse(localStorage.getItem('mensaje'));
    const foto = JSON.parse(localStorage.getItem('url'));
}

console.log(mostrarDatos());