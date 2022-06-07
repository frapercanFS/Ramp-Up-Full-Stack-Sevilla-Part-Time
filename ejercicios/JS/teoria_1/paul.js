const numbers = [4, 5, 6, 7, 8, 9, 10];
let elevarPorSiMismo = n => n * n;

let numbersCuadrado = numbers.map(elevarPorSiMismo);
console.log(numbersCuadrado)

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
mapa = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
}
let resultado = foodList.map(comida => mapa[comida])
console.log(resultado)

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];
let presentacion = staff.map(persona => `${persona.name} es ${persona.role} y le gusta  ${persona.hobbies[0]}  y  ${persona.hobbies[1]}`)

console.log(presentacion)
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = numbers1.filter(numero => numero % 2)
console.log(impares)
const foodList1 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];
let proximaComida = foodList1.filter(menu => menu.isVeggie == true).map(comida => `Que rico ${comida.name} me voy a comer!`)
console.log(proximaComida)

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
let listaDePapaNoel = inventory.filter(objetos => objetos.price > 300).map(objetos => objetos.name)
console.log(listaDePapaNoel)
const numeros2 = [39, 2, 4, 25, 62];
let acumulado = numeros2.reduce(function(anterior, actual, indice, vector){
    return anterior + actual;
  });
  console.log(acumulado)
  const sentenceElements = [
    'Me',
    'llamo',
    'paul',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  let fraseMotivadora = sentenceElements.reduce(function(anterior,actual){
      return anterior += ` ${actual}`;
  })
  console.log(fraseMotivadora)

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
  let sumaPrecio = books.filter(libros=> libros.category == 'code').reduce(function(anterior,actual){
      return anterior.price + actual.price
  })
  console.log(sumaPrecio)