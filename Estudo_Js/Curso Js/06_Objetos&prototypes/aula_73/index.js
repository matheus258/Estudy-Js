const produto = { nome: 'Caneca', preco: 1.8};
const outroProduto = {
    ...produto,
    material: 'porcelana',
    fabricacao: 'BR',
}
console.log(produto);
console.log(outroProduto);