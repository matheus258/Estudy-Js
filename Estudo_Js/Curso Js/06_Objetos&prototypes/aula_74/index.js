//Construtora -> molde (Classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

//Exemplo de Prototype
Pessoa.prototype.nomeCompleto = () => this.nome + " " + this.sobrenome;

const pessoa1 = new Pessoa('Geraldo','Alberto');
const pessoa2 = new Pessoa('Bianca','Tavares');

console.log(pessoa1);
console.log(pessoa2);
