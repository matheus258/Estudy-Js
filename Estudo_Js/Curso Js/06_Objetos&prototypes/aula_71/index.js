// Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, //Valor
        writable: true, // pode alterar
        configurable: true // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 5) 
console.log(p1);