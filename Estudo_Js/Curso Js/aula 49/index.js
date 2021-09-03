// Declaração de funcão
falaOi();
function falaOi() {
    console.log("Oie");
}

const souUmDado = function() {
    console.log("Sou um dado.")
}

//Funcao para executar outra funcao.
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

//arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function.")
}
funcaoArrow();