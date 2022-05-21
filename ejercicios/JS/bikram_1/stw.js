let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function esPar(a) {
    if (a % 2 == 0) {
        return true
    }
    else if (a % 2 != 0) {
        return false
    }
}

console.log(21, esPar(13));

function arrayFunciones(a, b) {
    return [(multiplicacion(a, b)), (division(a, b)), suma(a, b), resta(a, b)];
}

console.log(22, arrayFunciones(8, 2));

function ordenarArray2(a, b, c, d, e) {

    let listaNumerica = [];
    function compareNumbers(a, b) {
        return b - a;
    }

    listaNumerica.push(a, b, c, d, e);
    listaNumerica.join();
    listaNumerica.sort();
    listaNumerica.sort(compareNumbers);
    return listaNumerica;
}

console.log(23, ordenarArray2(12, 45, 123, 5, 89));
//esto muestra una array finita, es decir, tiene un numero limitado de numeros que podemos añadir(en este caso, 5)

function obtenerImpares() {
    let numerosPrueba = [5, 6, 4, 7];
    if (numerosPrueba[1] % 2 == 0) { numerosPrueba.splice(1, 1) };
    if (numerosPrueba[2] % 2 == 0) { numerosPrueba.splice(2, 1) };
    if (numerosPrueba[3] % 2 == 0) { numerosPrueba.splice(3, 1) };
    if (numerosPrueba[4] % 2 == 0) { numerosPrueba.splice(4, 1) };
    return numerosPrueba;
}

console.log(24, obtenerImpares());
//no funciona correctamente

function sumarArray(a, b, c) {
    let sumandos = [];
    sumandos.push(a, b, c);
    return ['la suma de ', sumandos, 'da como resultado ', sumandos];
}

console.log(25, sumarArray(4, 2, 5));
//esto muestra una array finita, es decir, tiene un numero limitado de numeros que podemos añadir(en este caso, 3)

function multiplicarArrays(a, b, c) {
    let multiplos = [];
    multiplos.push(a, b, c);
    return ['la multiplicacion de ', multiplos, 'es ', a * b * c];
}

console.log(26, multiplicarArrays(4, 2, 1));
//esto muestra una array finita, es decir, tiene un numero limitado de numeros que podemos añadir(en este caso, 3)