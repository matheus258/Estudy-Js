//Manipulação de prototype 
//new Object -> object.prototype
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

// --------------------

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camisa', 50);

//Literal
const p2 = {
    nome: 'Boné',
    preco: 25,
};

Object.defineProperty(p2, Produto.prototype);