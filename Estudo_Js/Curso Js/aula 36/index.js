const fruts = ['Maça', 'Pera', 'Uva'];

for (let i in fruts) {
    console.log(`${fruts[i]}`);
}

const feira = {
    rua: 'Abidedon',
    numero: 200,
    barracas: 3000,
}


for (let chave in feira) {
    console.log(chave, feira[chave]);
}
