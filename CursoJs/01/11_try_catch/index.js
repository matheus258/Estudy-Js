// console.log(nome); ReferenceError

console.log('Olá...');
console.log('##### EXECUTANDO TESTE #####');

// tratamos erros com try / catch;
try{
    console.log(nome);
} catch(e){
    console.log('Error: Não foi possivel imprimir nome.');
    console.log(e.message);
}

// Lançando erros

function dividir(num1, num2){
    if(num1 == 0|| num2 == 0) {
        throw('Os valores devem ser positivos')
    } else {
        return num1 / num2;
    }
}


try{
    console.log(dividir(0,2));

} catch(e){
    console.log('Não foi possivel dividir.');
}finally{
    console.log('vamos continuar');
}