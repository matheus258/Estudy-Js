// Peso leve: lutadores com peso mais leve que 55 kg;

// Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

// peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

// Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

// Peso pesado: pesos maiores ou iguais a 85 kg.


function solucao(peso1, peso2) {
    // seu codigo aqui
    // LEVE
    if (peso1 < 55 && peso2 < 55) {
        return 'PODEM LUTAR';
    } else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65){
        return 'PODEM LUTAR';
    } else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75){
        return 'PODEM LUTAR';
    } else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85){
        return 'PODEM LUTAR';
    } else if (peso1 >= 85 && peso2 >= 85){
        return 'PODEM LUTAR';
    } else {
        return 'NAO PODEM LUTAR';
    }
}