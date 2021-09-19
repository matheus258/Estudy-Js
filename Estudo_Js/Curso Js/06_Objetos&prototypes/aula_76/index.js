//Produto - > aumento, desconto
//Camiseta - cor, caneca - material
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
};

camisetaP.prototype = Object.create(Produto.prototype);
camisetaP.prototype.constructor = Camiseta;

const camisetaP = new Camiseta('Regata', 25, 'Azul-Ciano');

console.log(camisetaP);