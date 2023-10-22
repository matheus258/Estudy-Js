let nome = 0

if( nome == String){
  console.log('Deu bom')  
}else {
    console.log('Erro')
}

console.log('*****')

function notaFinal(nota){
    if(nota <= 6){
        console.log('Estude mais, resultado não alcançado!');
    } else {
        console.log('Parabens você passou!');

    }
}

notaFinal(5)
notaFinal(8)