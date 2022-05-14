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

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

var texto = "hola mundo";
console.log(texto.split())

// 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

// 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
