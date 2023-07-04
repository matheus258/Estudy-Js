// Funcao nada mais é aquilo que apresenta uma ação.

// um simples exemplo de funcao de somar.
function somar(num1, num2){
    return num1 + num2;
}

// um simples exemplo de funcao de subtrair.
function subtrair(num1, num2){
    return num1 - num2;
}


function fazAlgo(num1, num2, funcao){
    return function funcao(num1, num2){

    }
}

// New exemple

function outra(z){
    return z;
}

// cidadoes de primeira classe:
// fist-class citizens:
// Usar funcao atravez de variavel.

const ret = outra(subtrair);
console.log(ret(8,1))