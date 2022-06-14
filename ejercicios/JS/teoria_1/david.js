//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo
/*
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
potencia  = numbers.map(valores => valores * numbers);

console.log(potencia)*/

//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado
//const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

//Resultado esperado
/*const texto = {
    Pizza:'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
}
const resultado = foodList.map(comida => texto(comida));
console.log(resultado)*/

//Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
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

const aficiones = staff.map(empleado => `${empleado.name} es ${empleado.role} y le gusta ${empleado.hobbies[0]}`)
console.log(aficiones)

// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

//Crea un segundo array con que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numbers.filter(valor=> valor%2 === 1)

console.log(impares)

//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList = [
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
const veggie = foodList.map(esvegano => esvegano)
const sentencia = foodList.filter(vegano=> vegano===true)
console.log(sentencia)
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/