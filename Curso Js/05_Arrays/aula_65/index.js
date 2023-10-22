// Filter sempre retorna um array com a mesma quantidade de elementos ou menos.

const numeros = [88,1, 2, 3, 55, 4, 5, 6, 7, 8, 50, 40, 365];
const numerosFiltrados = numeros.filter( valor => valor > 10);
console.log(numerosFiltrados);
