// AULA OBJETO 

function criaPessoa(nome,sobrenome,idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
    }
}

const pessoa1 = criaPessoa('Matheus', 'Marques', 22);
const pessoa2 = criaPessoa('Stefany', 'Marques', 20);
const pessoa3 = criaPessoa('Rebeca', 'Alcantara', 21);
const pessoa4 = criaPessoa('João', 'Ricos', 30);

console.log(pessoa1.nome, pessoa2.nome);



/*
const pessoa50 = {
    nome: 'luiz',
    sobrenome: 'Gomes',
    idade: 60,

}
*/

