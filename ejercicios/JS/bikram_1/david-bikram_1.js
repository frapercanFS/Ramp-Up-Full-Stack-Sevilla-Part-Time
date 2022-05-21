 //15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

 let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
 
console.log(15, arrayNumerosNeg);


 //16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

 
 let holaMundo = ["Hola", "Mundo"];
 
console.log(16, holaMundo);

 //17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

 let loGuardoTodo = ["hola", "que", 23,  42.33, "tal"];
 
 console.log(17, loGuardoTodo);

// 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
 
console.log(18, arrayDeArrays);


// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

function multiplicacion(a, b) {
  return a * b;
}
var a =5;
var b = 3;

console.log(19, "el número ",a, " por ",b, "b = ",multiplicacion(a, b));

// 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

function division(a, b) {
  return a / b;
}
var a = 15;
var b = 3;

console.log(20, "el número ", a, " entre ", b, " = ", division(a, b));

// 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(argumento) {
  return argumento
}
{ var numero = 8;
  argumento = false;
    if(numero%2==0) {argumento = true;}

  }

console.log(21,esPar(argumento))

/*22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación
(todas aceptan 2 números como argumento y devuelve el resultado de su operación)*/

let arrayFunciones = [];
function suma(a, b) {
  return a + b;
}
var a = 15;
var b = 3;

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}
arrayFunciones.push("La suma es= "+suma(a,b));
arrayFunciones.push("La resta es= "+resta(a,b))
arrayFunciones.push("La multiplicacion es= "+multiplicacion(a,b))

console.log(22, arrayFunciones)

//23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

var listaNumeros = [4, 2, 7, 5, 1, 3, 9, 6, 8];
listaNumeros.sort(function ordenarArray2(a, b) {
  return a - b;
});
console.log(23, listaNumeros);

//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares




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

numeros = [4, 2, 7, 5, 1, 3, 9, 6, 8];;
console.log(24, obtenerImpares(numeros));



/*25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array 
Array: [1, 2, 3] resultado: 6*/


const Array = [1, 2, 3,];
let sumaLista = 0;

for (let i = 0; i < Array.length; i++) {
  sumaLista += Array[i];
}
console.log(25, sumaLista);



// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(listaNumeros) {
  let resultado = 1;
  for (let numero of listaNumeros) {
    resultado *= numero;
  }
  return resultado;
}

console.log(26,multiplicarArray([2, 3, 4]));