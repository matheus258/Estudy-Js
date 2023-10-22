//Retorne função que apresenta a seguinte ordem: 1 Sobrenome 2 Nome;
//Função com retorno do nome;
function returnName(nome, sobrenome) {
    return sobrenome+ ', ' + nome;
};

//Variavel com parametro criado;
const pessoa1 = returnName('Ruan Felipe','Santos');

console.log(pessoa1);