const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log("")
console.log("Uso de break e Continue")

for( let numero of numeros){
    if (numero === 2){
        console.log("Pulei o 2");
        continue;
    }
    console.log(numero);
    
    if (numero ===6){
        console.log("6 encontrado, saindo...");
        break;
    }
}



