let array = ["Olá", "pedra", "Areia", "Brazil", 5, 1500];

console.log(array.length);

// Adiciona no final
array.push("Caderno");

console.log(array);

// Remove o ultimo
array.pop();
console.log(array);

let posicao = array.indexOf("pedra");
console.log(posicao);

// unshift COLOCA NO INICIO

array.unshift("COLORS");
array.unshift(2116);
console.log(array);

// shift remove o primeiro
array.shift();
console.log(array);

// Ultimo elemento
console.log(array[array.length - 1]);
