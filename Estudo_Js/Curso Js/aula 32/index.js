/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;

EXERCICIO ANTERIOR  */

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um,dois,tres);
console.log(resto);

const numeros1 = [ [1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = numeros1;
console.log(lista1);