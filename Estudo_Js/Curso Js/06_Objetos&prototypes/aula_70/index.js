//Criação de Objeto. 

const pessoa = {
    nome: 'Nome',
    sobrenome: 'Sobrenome',
};

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Carlos';
pessoa1.idade = 22;

console.log(pessoa,pessoa1);

// Factory functions / constructor functions / Classes.

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Matheus', 'Marques');

console.log(p1);