function Produto(nome,preco,unidades){
    this.nome = nome;
    this.preco = preco;
    this.unidades = unidades;
};

//Metódos prototype 
Produto.prototype.aumentaValor = function(quantia){
this.preco = this.preco - quantia;
};

Produto.prototype.descontoValor = function(quantia){
    this.preco = this.preco - quantia;
};

function Bola(nome,preco,unidades, cor, ano){
    Produto.call(this,nome,preco,unidades);
    this.cor = cor;
    this.ano = ano;
};

function Teclado(nome,preco,unidades){
    Produto.call(this,nome,preco,unidades);
    this.nome = this.nome;
    this.preco = this.preco;
    this.unidades = this.unidades;
}

//alterando valor do prototype de Bola sendo assim copiando o valor do prototype de Produto.
Bola.prototype = Object.create(Produto.prototype);
//Alterando o construtor para sua antiga forma.
Bola.prototype.constructor = Bola;

//Segunda configuração de Proto para TECLADO 
Teclado.prototype = Object.create(Produto.prototype);
Teclado.prototype.constructor = Teclado;

const bola01 = new Bola('Jabulani',50,5, 'azul',2010);

console.log(bola01);