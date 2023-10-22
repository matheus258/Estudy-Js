/* function funcao(){
    console.log(arguments);
}

funcao('um', 'dois', 'tres');


function funcao1(a, b= 2, c = 4){
    console.log(a + b + c);
} */
 
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Matheus',sobrenome:'Marques', idade: 22};

funcao2(obj);

