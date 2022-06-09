// Crea un segundo array con que devuelva los pares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impares = numbers.filter((valor) => valor % 2 != 0);

console.log(impares);

const foodList = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let veganFood = foodList
  .filter((valor) => valor.isVeggie)
  .map(
    (valor) => {
      if (valor.name == "Tempeh") {
        return "Que rico " + valor.name + " me voy a comer";
      } else {
        return "Que rica " + valor.name + " me voy a comer";
      }
    }
    // valor.name == "Tempeh"
    //   ? "Que rico " + valor.name + " me voy a comer"
    //   : "Que rica " + valor.name + " me voy a comer"
  );

console.log(veganFood);

// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

let inventarioFiltrado = inventory
  .filter((valor) => valor.price > 300)
  .map((valor) => valor.name);

console.log(inventarioFiltrado);

// Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

let multiplicacionNumeros = numeros.reduce(
  (anterior, actual, indice, vector) => anterior * actual
);

console.log(multiplicacionNumeros);

const sentenceElements = [
  "Me",
  "llamo",
  "Fran",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

let concatenarElementos = sentenceElements.reduce(
  (anterior, actual, indice, vector) => anterior.concat(" ",actual)
);

console.log(concatenarElementos)


const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let montoTotalBooks = books.filter(valor => valor.category == 'code').reduce((anterior, actual) => anterior.price + actual.price )


