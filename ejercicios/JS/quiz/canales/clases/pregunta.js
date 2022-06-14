export default class Pregunta {
    constructor(titulo, respuestas, solucion, name) {
      this.titulo = titulo;
      this.respuestas = respuestas;
      this.solucion = solucion;
      this.name = name;
    }
    imprimePregunta() {
      let newHTML = "";
  
      newHTML += this.imprimeTitulo();
      newHTML += this.imprimeTodasLasRespuestas();
      // newHTML += imprimeBotonSubmit();
  
      return newHTML;
    }
    imprimeTitulo() {
      return "<p class='titulo'>".concat(this.titulo, "</p>");
    }
    imprimeTodasLasRespuestas() {
      let composicion = [];
      for (let respuesta of this.respuestas) {
        composicion.push(this.imprimeUnaRespuesta(respuesta));
      }
      return composicion.toString().replace(/,/g, " ");
    }
    imprimeUnaRespuesta(respuesta) {
      let newHTML = "";
  
      newHTML += this.imprimeLabel(respuesta);
      newHTML += this.imprimeInput(respuesta);
  
      return newHTML;
    }
    imprimeLabel(respuesta) {
      return '<label for="'.concat(
        respuesta.id,
        '">',
        respuesta.label,
        "</label>"
      );
    }
    imprimeInput(respuesta) {
      return '<input type="radio" id="'.concat(
        respuesta.id,
        '" name="',
        this.name,
        '" value="',
        respuesta.value,
        '"><br> '
      );
    }
  }
  