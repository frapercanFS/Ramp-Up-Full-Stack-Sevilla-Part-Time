const respuestas = {
  elminster: "mago",
  absurda: "two",
};

document
  .querySelector('form[name="dnd"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();

    let soluciones = [];

    for (let respuesta of Object.keys(respuestas)) {
      console.log(respuesta);
      let respuestaSeleccionada = "";
      for (let input of document.getElementsByName(respuesta)) {
        if (input.checked == true) {
          respuestaSeleccionada = input.value;
        }
      }
      if (respuestaSeleccionada == respuestas[respuesta]) {
        alert("Correcta");
      } else {
        alert("Incorrecta");
      }
    }
  });

  
