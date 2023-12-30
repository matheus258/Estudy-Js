// CRIACAO DE OBJ
const pessoa = {
  nome: "Matheus",
  idade: 25,
  saudacao: function () {
    return `Bom dia! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

console.log(pessoa.saudacao());
