const listaNumeros = [ 23, 56, 45, 5, 4, 6];

//Soma dos numeros da lista:
let acumulador = 0;

for (const numero of listaNumeros){
    acumulador += numero;
}

console.log('A soma da lista é:',acumulador);

// Qual o menor deles?

let menorNumero;

for (numeros of listaNumeros){
    if(menorNumero === undefined){
        menorNumero = numeros;
    } else {
        if(numeros < menorNumero){
            menorNumero = numeros;
        }
    }
}

console.log('O menor numero da lista é:', menorNumero);