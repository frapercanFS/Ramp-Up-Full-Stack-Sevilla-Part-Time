// 1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula

let Coche = {
  marca: "Fiat",
  modelo: "Panda",
  matricula: "sflkghlsf",
};

console.log(1, Coche);

// 2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso

const Casa = {
  codPostal: "41010",
  calle: "Ronda de Triana",
  portal: "3",
  piso: "9F",
};

console.log(2, Casa);

// 3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos
let FullStackDeveloper = {
  lenguajes: [],
  proyectos: [],
};

FullStackDeveloper.lenguajes.push("Java");
FullStackDeveloper.proyectos.push("Hacerse rico");

console.log(3, FullStackDeveloper);

// 4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)

let Perro = {
  nombre: "Toby",
  ladrar: function () {
    console.log("GUAU");
  },
  popo: function () {
    return Math.random() * 3;
  },
  cambiarNombre: function (nombre) {
    this.nombre = nombre;
  },
};

Perro.cambiarNombre("Pepe");
console.log(Perro);

//5.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil

let Portatil = {
  marca: "",
};

Portatil.marca = "Asus";

console.log(5, Portatil);
//6.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2
Portatil["marca"] = "Dell";
console.log(6, Portatil);
//7.- Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos

let Concierto = {
  grupos: [],
};

Concierto.grupos.push("ACDC");
Concierto.grupos.push("SFDK");

console.log(7, Concierto);
//8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]

let Led = {
  RGB: ["Rojo", "Verde", "Azul"],
};

console.log(8, Led);

//9.- Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345
Portatil.modelo = "P345";

//10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera
Concierto.grupos.push("Guns N' Roses");

console.log(10, Concierto);
//11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)
Concierto.fecha = new Date().toString();

console.log(11, Concierto);
//12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas

let Impresora = {
    imprimiendo: {}
};

Impresora.imprimiendo['nombreArchivo'] = 'nombre'
Impresora.imprimiendo.copias = 3
Impresora.imprimiendo['numPaginas'] = 58

console.log(Impresora)
