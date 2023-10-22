
function solucao(pesos){

    let peso1 = pesos[0];
    let peso2 = pesos[1];

    let pesoFinal;

    if(peso1 == peso2) return 'PODEM LUTAR';
    if (peso1 > peso2){
        pesoFinal = peso1 - peso2;

    } else if (peso2 > peso1){
        pesoFinal = peso2 - peso1;
    }

    if (pesoFinal <= 5){
        return 'PODEM LUTAR';
    } else {
        return 'NAO PODEM LUTAR';
    }
}

console.log(solucao([50,56]));