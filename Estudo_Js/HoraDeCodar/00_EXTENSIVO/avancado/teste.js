let produtos = [
  "camisa-PP",
  "camisa-M",
  "camisa-G",
  "camisa-GG",
  "camisa-GG",
  "camiseta-PP",
  "camiseta-G",
  "cueca-M",
  "blusa-XG",
  "blusa-XG",
  "blusa-XG",
  "blusa-P",
];

let newObt;
let x;

newObt = produtos.map((produto, tamanho) => {
  for (let i = 0; i < produtos.length; i++) {
    const [produto, tamanho] = produtos[i].split("-"); // criar um map para teste.

    console.log(produtos[i]);
  }
  return `Produto: ${produto} | Tamanho: ${tamanho + 1}`;
});

console.log(newObt);

let resultado = produtos[0].split("-");

console.log(newObt);
// console.log(resultado);
