//https://github.com/TheBridge-FullStackDeveloper/fundamentos-de-programacion-bikram-array-funciones

// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
// let arrayVacio = new Array()
let arrayVacio = [];

console.log(1, arrayVacio);

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

/* rangoNumeros = function (inicio, fin) {
    var vacio = []
    for(inicio;inicio!=fin;inicio++){
        vacio.push(inicio)

    }
    return vacio;
}; */

arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(2, arrayNumeros);

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

rangonNumerosPar = function (inicio, fin) {
  var listaNumerosPares = [];
  for (inicio; inicio != fin; inicio++) {
    if (inicio % 2 == 0) {
      listaNumerosPares.push(inicio);
    }
  }
  return listaNumerosPares;
};

console.log(3, rangonNumerosPar(0, 10));
//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

var arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

console.log(arrayBidimensional);

// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(a, b) {
  return a + b;
}
var a = 5;
var b = 3;
console.log(5, "la suma de", a, " y ", b, "es: ", suma(a, b));

// 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potencia(a, b) {
  return a ** b;
}
console.log(5, "la potencia de", a, " y ", b, "es: ", potencia(a, b));

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => ['hola', 'mundo']

function separarPalabras(texto) {
  var palabra = "";
  var resultado = [];
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == " ") {
      resultado.push(palabra);
      palabra = "";
    } else {
      palabra = palabra.concat(texto[i]);
    }
  }
  if (palabra != "") {
    resultado.push(palabra);
  }

  return resultado;
}

var texto = "hola mundo ";

console.log("palabra", separarPalabras(texto));

// 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(texto, repeticiones) {
  var resultado = "";
  for (let i = 0; i < repeticiones; i++) {
    resultado = resultado.concat(texto);
  }
  return resultado;
}

console.log(repetirString("textoarepetir", 5));

// 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

function esPrimo(numero) {
  var resultado = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      resultado = false;
      break;
    }
  }
  return resultado;
}

console.log(9, esPrimo(29));

// 10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

function ordenarArray(numeros) {
  var resultado = numeros.sort(function (a, b) {
    return a - b;
  });
  return resultado;
}

var numeros = [];

console.log(10, ordenarArray([5, 2, 3, 3]));

// 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

function obtenerPares(numeros) {
  var resultado = [];

  for (let numero of numeros) {
    if (numero % 2 == 0) {
      resultado.push(numero);
    }
  }
  return resultado;
}

numeros = [1, 5, 3, 4, 5, 6];
console.log(11, obtenerPares(numeros));

// 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(lista) {
  var resultado = "[";
  var separador = ",";
  for (let elemento of lista) {
    resultado = resultado.concat(elemento);
    if (lista.indexOf(elemento) != lista.length - 1) {
      resultado = resultado.concat(separador);
    }
  }
  resultado = resultado.concat("]");
  return resultado;
}

console.log(12, pintarArray(["4", "hola", "je"]));

//13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(lista, funcion) {
  return lista.map(funcion);
}

var lista = [4, 9, 16, 25, 36];
console.log(arrayMapi(lista, Math.sqrt));
console.log(lista.map(Math.sqrt));

//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

function eliminarDuplicados(lista) {
  noDuplicados = [];
  for (let elemento of lista) {
    if (!noDuplicados.includes(elemento)) {
      noDuplicados.push(elemento);
    }
  }
  return noDuplicados;
}

var listaDuplicados = ["hola", "adios", "adios", "hasta luego"];
console.log(14, eliminarDuplicados(listaDuplicados));

// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(listaNumeros) {
  let resultado = 1;
  for (let numero of listaNumeros) {
    resultado *= numero;
  }
  return resultado;
}

console.log(multiplicarArray([2, 3, 4]));

// 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(numeros) {
  var resultado = [];

  for (let numero of numeros) {
    if (numero % 2 != 0) {
      resultado.push(numero);
    }
  }
  return resultado;
}

numeros = [1, 5, 3, 4, 5, 6];
console.log(24, obtenerImpares(numeros));

