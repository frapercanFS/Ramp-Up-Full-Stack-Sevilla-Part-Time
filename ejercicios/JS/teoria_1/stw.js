// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

const numbers = [4, 5, 6, 7, 8, 9, 10];
let elevado = n => n ** n;
let numbersElevados = numbers.map(elevado);
console.log(numbersElevados);

//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let mapa = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso',
}

let resultado = foodList.map(comida => mapa[comida]);

console.log(resultado)

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
        hobbies: ['el futbol', 'el queso']
    }

];

let personalidad = staff.map((empleado) => `${empleado.name} es ${empleado.role} y le gusta ${(empleado.hobbies[0])} y ${(empleado.hobbies[1])}`);


console.log(personalidad);

//Crea un segundo array con que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numerosFiltrados = numbers2.filter(numero => numero % 2 != 0);

console.log(numerosFiltrados);


//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
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



/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/