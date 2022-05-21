// https://github.com/TheBridge-FullStackDeveloper/fundamentos-de-programacion-kata-fizzbuzz
/* Imprime todos los números del 1 al 1000 por consola,
 con la salvedad de todos aquellos números que sean múltiplos de 3 
 que en vez de imprimir el número, se imprimirá fizz y además, 
 en lugar de los números que sean múltiplos de 5 se imprimirá buzz. */
for (let i = 1; i <= 1000; i++) {
    var text = i
  if (i % 3 == 0) {
    text = 'fizz'
  }
  if (i % 5 == 0) {
    text = 'buzz'
  }
  if (i % 3 == 0 && i % 5 == 0) {
    text = 'fizzbuzz'
  }
  console.log(text)
  
}

/* for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
} */

/* for (let i = 1; i < 101;) 
console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i) */
