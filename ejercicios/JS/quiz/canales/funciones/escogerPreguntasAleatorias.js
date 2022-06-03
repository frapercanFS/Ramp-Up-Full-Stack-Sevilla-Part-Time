export function escogerPreguntasAleatorias(preguntas, numeroPreguntas) {
  let preguntasPorEscoger = preguntas;
  let escogidas = [];

  while (escogidas.length != numeroPreguntas) {
    const [escogida, indice] = escoger(preguntasPorEscoger);
    preguntasPorEscoger = preguntasPorEscoger.splice(indice);
    escogidas.push(escogida);
  }
  return escogidas;
}

function escoger(lista) {
  var index = Math.floor(Math.random() * lista.length);
  return [lista[index], index];
}
