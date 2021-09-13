const nomes = ['Maria', 'John', 'Mary'];
//remove no final do array
const removidos = nomes.pop();

//remove no começo do array
const removidos1 = nomes.shift();

//adiciona no começo da lista 
nomes.push('Andres');

console.log(nomes, removidos);

const nomesList = nomes.join(' ');

console.log(nomesList)
