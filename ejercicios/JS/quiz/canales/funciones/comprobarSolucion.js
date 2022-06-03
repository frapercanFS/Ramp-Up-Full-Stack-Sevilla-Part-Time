export function comprobarSolucion(html, trivial) {
  let selecciones = [];
  let soluciones = [];
  let nombres = [];
  for (let pregunta of trivial.preguntas) {
    soluciones.push(pregunta.solucion);
    nombres.push(pregunta.name);
    for (let input of document.getElementsByName(pregunta.name)) {
      if (input.checked == true) {
        selecciones.push(input.value);
      }
    }
    if (selecciones.length != soluciones.length) {
      selecciones.push(false);
    }
  }
  mostrarErrores(selecciones, soluciones, nombres);
}

function mostrarErrores(selecciones, soluciones, nombres) {
  let newErrores = "";
  for (
    let indicePregunta = 0;
    indicePregunta < selecciones.length ;
    indicePregunta++
  ) {
    if (selecciones[indicePregunta] != soluciones[indicePregunta]) {
      newErrores += "Fallaste en la pregunta: " + nombres[indicePregunta] + "\n";
    }
  }
  if(newErrores){
    alert(newErrores);
  }
  else{
      alert("Acertaste todas las preguntas!")
  }
  
}
