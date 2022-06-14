let alumnos = ["Fran", "David", "Stewart", "Edu", "Paul"];
let roles = ["Testing", "Data", "API", "Maquetacion", "lógica"];

let resultados = {};

// let resultadoSorteo = Math.floor(Math.random() * 5);

function asignacion() {
  let numeroAleatorioAlumno = Math.floor(Math.random() * alumnos.length);
  let numeroAleatorioRol = Math.floor(Math.random() * roles.length);

  let alumno = alumnos[numeroAleatorioAlumno];
  let rol = roles[numeroAleatorioRol];

  resultados[alumno] = rol;

  alumnos.splice(numeroAleatorioAlumno, 1);
  roles.splice(numeroAleatorioRol, 1);
}

function empezarConcurso() {
  while (alumnos.length != 0) {
    asignacion();
  }
  console.log(resultados);
}

empezarConcurso();
