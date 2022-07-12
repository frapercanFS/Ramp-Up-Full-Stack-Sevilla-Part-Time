function guardarDatos() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;
  let URL = document.getElementById("URL").value;

  let usuario = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje,
    url: URL,
  };
  localStorage.setItem(localStorage.length + 1, JSON.stringify(usuario));
}

function borrarDatos() {
  console.log("clear");
  localStorage.clear();
  location.reload();
}

function mostrarUsuarios() {
  html = "";
  for ([clave, usuario] of Object.entries(localStorage)) {
    usuario = JSON.parse(usuario);

    html +=
      '<label>Nombre: </label><span id="nombre">' + usuario.nombre + "</span> ";
    html +=
      '<label>Correo: </label><span id="correo">' + usuario.correo + "</span> ";
    html +=
      '<label>Mensaje: </label><span id="mensaje">' +
      usuario.mensaje +
      "</span>";
    html +=
      '<label>URL: </label><span id="url">' +
      usuario.url +
      '</span> <button name="borrar" onclick="borrarDato(' +
      clave +
      ')"' +
      ">borrar</button>";
    html += "<br>";
  }
  destinoEscritura = document.getElementById("usuarios").innerHTML = html;
}

function borrarDato(clave) {
  localStorage.removeItem(clave);
  mostrarUsuarios();
}
