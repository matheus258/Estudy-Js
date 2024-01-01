// ESTUDO DE THIS
const pessoa = {
  nome: "Matheus",
  idade: 25,
  pais: "Brazil",
  cidade: "Campina Grande",
  estado: "Paraíba",
  Jobs: "Developer",
  saudacao: function () {
    return `Bom dia! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
  resumo: function () {
    return `${this.saudacao()} Eu moro em ${this.cidade}-${this.estado} no ${
      this.pais
    }, e sou desenvolvedor de software.`;
  },
};

console.log(pessoa.resumo());
// Como foi usado no codigo podemos chamar funcoes dentro de outra funcao no OBJ com this.
